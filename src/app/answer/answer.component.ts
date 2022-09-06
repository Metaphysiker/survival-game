import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Answer } from '../answer';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

  @Output() answerEvent = new EventEmitter<Answer>();

  @Input() answer: Answer = {
    question_id: 0,
    text: "That",
    correct_answer: "Yes"
  }

  constructor() { }

  ngOnInit(): void {
  }

  clickOnAnswer() {
    this.answerEvent.emit(this.answer);
  }

}
