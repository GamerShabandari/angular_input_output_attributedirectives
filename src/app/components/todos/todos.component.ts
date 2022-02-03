import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  myTodosList: Todo[] = [new Todo("handla"), new Todo("träna")]

  constructor() { }

  ngOnInit(): void {
  }

  updateTodoList(newTodoToList:string){

    this.myTodosList.push(new Todo(newTodoToList));
  }

  deleteTodoFromList(deleteThisOne:Todo){

    for (let i = 0; i < this.myTodosList.length; i++) {
      const T = this.myTodosList[i];

      if (T.title === deleteThisOne.title) {

        this.myTodosList.splice(i,1);

        
      }
      
    }

  }

}
