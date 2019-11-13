import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Learn more about clean code!';
  cleanCodeArr: string[];

  constructor() {
    this.cleanCodeArr = [
      'Name methods with verbs that are meaningful to their action.',
      'Comments might lie.',
      'Making code easier to read makes it easier to write (ratio time spent searching vs typing).',
      'Leave the code cleaner than you found it.',
      'You are responsible for the quality of your code.'
    ];
  }

  showNewLine() {
    const rand = this.cleanCodeArr[Math.floor(Math.random() *  this.cleanCodeArr.length)];
    console.log(rand);
    this.title = rand;
  }
}
