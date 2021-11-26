import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DropEvent } from 'angular-draggable-droppable';
import { Task } from './interfaces/Task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  className: string = "hidden-opacity"

  tasks: Task[] = [
    {name: "Task 1", done: false},
    {name: "Task 21", done: false},
    {name: "Task 3", done: false},
    {name: "Task 5", done: false},
    {name: "Task 8", done: false},
  ]

  taskForm = new FormGroup({
    name: new FormControl("", Validators.required),
  });

  onSubmit() {
      this.tasks.push({name: this.taskForm.value.name, done: false});

      console.log(this.tasks);

      this.taskForm.reset()
  }

  onDelete({ dropData }: DropEvent<Task>) {
   const index = this.tasks.indexOf(dropData);
   this.tasks.splice(index, 1);
  
  }

  dragEnd(event){
    this.className = "hidden-opacity"
  }

  dragStart(event) {
    this.className = "show-opacity"
  }

}
