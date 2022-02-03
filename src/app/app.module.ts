import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { SavetodoComponent } from './components/savetodo/savetodo.component';
import { TodosComponent } from './components/todos/todos.component';
import { HighlightDirective } from './directives/highlight.directive';
import { SetdurationDirective } from './directives/setduration.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    SavetodoComponent,
    TodosComponent,
    HighlightDirective,
    SetdurationDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
