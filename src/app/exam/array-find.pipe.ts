import { Pipe, PipeTransform } from '@angular/core';
import { Answer } from '../shared/question.model';

@Pipe({
  name: 'arrayFind'
})
export class ArrayFindPipe implements PipeTransform {

  transform(options: Answer[], id: number): string {
    let selectedAnswer = options.find(opt => opt.id === id);
    if (selectedAnswer) {
      return selectedAnswer.answer;
    }
    return 'Not Answered';
  }
}
