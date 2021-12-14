import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DailyTestService } from 'src/app/shared/daily-test.service';
import { Question } from 'src/app/shared/question.model';

@Component({
  selector: 'app-review-test',
  templateUrl: './review-test.component.html',
  styleUrls: ['./review-test.component.css']
})
export class ReviewTestComponent implements OnInit {

  questions!: Question[];

  constructor(
    private dailyTestService: DailyTestService,
    private router: Router) { }

  ngOnInit(): void {
    console.log('In review');
    let questions = this.dailyTestService.getQuestions();
    if (questions) {
      this.questions = questions;
    } else {
      this.router.navigate(['exam']);
    }

  }

  submitAnswer() {
    this.router.navigate(['exam','dailytest', 'review', 'result']);
  }

}
