import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos!: Todo[];
  localItems!: string | null;
  constructor() {
    this.localItems = localStorage.getItem('todos');
    if (this.localItems === null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItems);
    }
  }

  ngOnInit(): void {}

  onTodoDeleteHandler(todo: Todo) {
    // console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);

    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  onAddTodoHandler(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  onCheckBoxClickHandler(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;

    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
