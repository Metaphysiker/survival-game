import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

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

  @Output() correctAnswerEvent = new EventEmitter<string>();

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
    this.setQuestionAndAnswers();
  }

  setQuestionAndAnswers(){
    console.log(this.question_id);
    this.question = this.questionService.getQuestions(this.question_id)[0];
    this.answers = this.answerService.getAnswers(this.question.id);
  }

  ngOnChanges() {
    this.setQuestionAndAnswers();
  }


  checkIfAnswerIsCorrect(answer: Answer){
    if(answer.correct_answer === "true"){
      this.correctAnswerEvent.emit("true");
    }
  }

  log(answer: Answer) {
    console.log(answer);
  }

}
