import { Injectable } from '@angular/core';
import { Answer } from './answer';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  answers: Answer[] = [
    {
      question_id: 1,
      text: "Ich lege mich auf den Boden und sterbe, weil Menschen früher auch Fleisch gegessen haben.",
      correct_answer: "false"
    },
    {
      question_id: 1,
      text: "Ich kaufe proteinhaltige Pflanzen, wie zum Beispiel Hülsenfrüchte, Getreideprodukte oder Nüsse.",
      correct_answer: "true"
    },
    {
      question_id: 1,
      text: "Ich lege mich auf den Boden und sterbe, weil Menschen ohne Jagen nicht überlebt hätten.",
      correct_answer: "false"
    }
  ];

  constructor() { }

  getAnswers(question_id: number){
    var result: Answer[] = [

    ];

    for (let i = 0; i < this.answers.length; i++) {
      if(this.answers[i].question_id === question_id){
        result.push(this.answers[i]);
      }
    }

    return result;

  }
}
