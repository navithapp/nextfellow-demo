import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DailyTestService } from 'src/app/shared/daily-test.service';
import { Question } from 'src/app/shared/question.model';

@Component({
  selector: 'app-question-set',
  templateUrl: './question-set.component.html',
  styleUrls: ['./question-set.component.css']
})
export class QuestionSetComponent implements OnInit {

  questions!: Question[];
  @Input() index!: number;
  
  constructor(
    private dailyTest: DailyTestService,
    private router: Router) { }

  ngOnInit(): void {
    let questions = this.dailyTest.getQuestions();
    if (questions) {
      this.questions = questions;
      } else {
      this.router.navigate(['exam']);
    }
  }

  navigateToQuestion(index: number) {
    this.router.navigate(['exam', 'dailytest', ++index]);
   }

}
