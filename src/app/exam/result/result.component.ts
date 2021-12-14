import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DailyTestService } from 'src/app/shared/daily-test.service';
import { Question } from 'src/app/shared/question.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  questions!: Question[];
  correctAnswerCount!: number;
  passPercentage!: number;
  constructor(
    private dailyTestService: DailyTestService,
    private router: Router) { }

  ngOnInit(): void {
    console.log('In review');
    let questions = this.dailyTestService.getQuestions();
    if (questions) {
      this.questions = questions;
      this.correctAnswerCount = this.questions.filter(q => q.selectedAnswer===q.correctAnswer).length;
      this.passPercentage = (this.correctAnswerCount/this.questions.length);
      console.log(this.passPercentage);
    } else {
      this.router.navigate(['exam']);
    }


  }

}
