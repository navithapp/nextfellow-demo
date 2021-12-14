import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exam } from './exam.model';
import { tap } from 'rxjs/operators';
import { Question } from './question.model';

@Injectable({
  providedIn: 'root'
})
export class DailyTestService {

  exam: Exam | undefined;
  
  constructor(private http: HttpClient) { }

  createExam() {
    return this.http.get<Question[]>('https://nextfellow-74014-default-rtdb.firebaseio.com/questions.json')
      .pipe(
        tap((questions: Question[]) => {
          this.exam = new Exam('', questions);
          console.log(this.exam);
        })
      );
  }

  getQuestions(): Question[] | undefined {
    return this.exam?.questions;
  }

}
