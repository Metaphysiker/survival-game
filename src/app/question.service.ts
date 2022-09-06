import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions: any[] = [
    {
      id: 1,
      text: "Dein Körper braucht Proteine zum Überleben. Was wirst du tun?"
    }
  ];

  constructor() { }

  getQuestions(question_id: number){
    var result: Question[] = [

    ];

    for (let i = 0; i < this.questions.length; i++) {
      if(this.questions[i].id === question_id){
        result.push(this.questions[i]);
      }
    }

    return result;

  }
}
