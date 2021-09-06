import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() todoDelete = new EventEmitter<Todo>();
  @Output() todoCheckbox = new EventEmitter<Todo>();
  constructor() {}

  ngOnInit(): void {}

  onDeleteClicked(todo: Todo) {
    this.todoDelete.emit(todo);
    // console.log('Delete is clicked');
  }

  onCheckBoxClick(todo: Todo) {
    // todo.active = !todo.active;
    this.todoCheckbox.emit(todo);
  }
}
