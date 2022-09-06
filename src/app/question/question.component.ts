import { Component, OnInit, Input, Output } from '@angular/core';

import { Question } from '../question';
import { Answer } from '../answer';
import { AnswerService } from '../answer.service';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question_id: number = 1;

  question: Question = {
    id: 0,
    text: "Whut?"
  };

  answers: Answer[] = [];

  constructor(
    private answerService: AnswerService,
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
    this.question = this.questionService.getQuestions(1)[0];
    console.log(this.questionService.getQuestions(1)[0]);
    this.answers = this.answerService.getAnswers(1);
  }

}
