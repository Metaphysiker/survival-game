import { Injectable } from '@angular/core';
import { Answer } from './answer';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  answers: Answer[] = [
    {
      question_id: 1,
      text: "Ich lege mich auf den Boden und sterbe, weil Menschen früher Fleisch gegessen haben.",
      correct_answer: "false"
    },
    {
      question_id: 1,
      text: "Ich kaufe proteinhaltige Lebensmittel, wie zum Beispiel Hülsenfrüchte, Getreideprodukte oder Nüsse.",
      correct_answer: "true"
    },
    {
      question_id: 1,
      text: "Ich lege mich auf den Boden und sterbe, weil es Menschen gibt, die auf einer einsamen Insel stranden, wo es nur Tiere zum Essen gibt.",
      correct_answer: "false"
    },
    {
      question_id: 2,
      text: "Ich lege mich auf den Boden und sterbe, weil Menschen früher Vitamin B12 nicht synthetisch herstellen konnten.",
      correct_answer: "false"
    },
    {
      question_id: 2,
      text: "Ich kaufe entweder Produkte, die mit Vitamin B12 angereichert wurden, oder Vitamin-B12-Ergänzungsnahrung.",
      correct_answer: "true"
    },
    {
      question_id: 2,
      text: "Ich lege mich auf den Boden und sterbe, weil Chemikalien schlecht sind, ausser Antibiotika.",
      correct_answer: "false"
    },
    {
      question_id: 3,
      text: "Ich lege mich auf den Boden und sterbe, weil staatlich subventionierte Bauern sonst ihren Job verlieren, wenn ich keine Muttermilch mehr kaufe.",
      correct_answer: "false"
    },
    {
      question_id: 3,
      text: "Ich kaufe kalziumreiche Lebensmittel, wie Sesamsamen, Mandeln, grüne Bohnen, Grünkohl, Tofu und Mineralwasser.",
      correct_answer: "true"
    },
    {
      question_id: 3,
      text: "Ich lege mich auf dem Boden und sterbe, weil mit Kalzium angereicherte Drinks unnatürlich sind.",
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
