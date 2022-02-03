import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo:Todo = new Todo("")

  @Output() deleteTodo = new EventEmitter<Todo>();

  i:number = 0


  constructor() { }

  ngOnInit(): void {
  }

  toggle(todo:Todo){
    todo.isDone = !todo.isDone
  }

  deleteThisTodo(todoToDelete:Todo){

    this.deleteTodo.emit(todoToDelete);
  
    
  }

}
