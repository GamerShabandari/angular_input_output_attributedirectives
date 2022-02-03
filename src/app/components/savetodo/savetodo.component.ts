import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-savetodo',
  templateUrl: './savetodo.component.html',
  styleUrls: ['./savetodo.component.scss']
})
export class SavetodoComponent implements OnInit {

  @Output() saveTodo = new EventEmitter<string>();

  newTodo:string = ""

  yourChoice:string = "";

  chosenColor:string = "transparent"

  constructor() { }

  ngOnInit(): void {
  }

  saveNewTodo(addedTodo:string){

    this.newTodo = addedTodo

    this.saveTodo.emit(this.newTodo);

    //console.log(newTodo);
    
  }

  setDuration(chosenDuration:string){
    //console.log(Number(chosenDuration));

    this.yourChoice = chosenDuration

    //this.yourChoice = Number(chosenDuration)

    console.log(this.yourChoice);
    
  }

  setColor(chosenColor:string){

    this.chosenColor = chosenColor

    console.log(this.chosenColor);
    

  }

}
