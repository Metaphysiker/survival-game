import { Component, OnInit, Input, Output } from '@angular/core';

import { Answer } from '../answer';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

  @Input() answer: Answer = {
    question_id: 0,
    text: "That",
    correct_answer: "Yes"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
