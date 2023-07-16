import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-exercise',
  templateUrl: './directive-exercise.component.html',
  styleUrls: ['./directive-exercise.component.css']
})
export class DirectiveExerciseComponent {
  showText = false;
  buttonClicks = [];

  displayText () {
    this.showText = !this.showText;
    this.buttonClicks.push(this.buttonClicks.length+1);
  }
}
