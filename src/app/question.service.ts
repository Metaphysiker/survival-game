import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions: Question[] = [
    {
      id: 1,
      text: "Dein Körper braucht Protein. Was wirst du tun?"
    },
    {
      id: 2,
      text: "Dein Körper braucht Vitamin B12. Was wirst du tun?"
    },
    {
      id: 3,
      text: "Dein Körper braucht Kalzium. Was wirst du tun?"
    },
    {
      id: 4,
      text: "Dein Körper braucht Eisen. Was wirst du tun?"
    },
    {
      id: 5,
      text: "Dein Körper braucht Kalzium. Was wirst du tun?"
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
