import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  orderOfQuestions: number[] = [
    1,2,3,4,5
  ];

  day: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  log(result: string){
    console.log(result);
    this.day += 1;
  }



}
