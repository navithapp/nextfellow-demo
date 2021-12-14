import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { DailyTestService } from 'src/app/shared/daily-test.service';
import { Question } from 'src/app/shared/question.model';

@Component({
  selector: 'app-daily-test',
  templateUrl: './daily-test.component.html',
  styleUrls: ['./daily-test.component.css']
})
export class DailyTestComponent implements OnInit {

  index!: number;
  question!: Question;
  
  questions!: Question[];
  
  questionForm!: FormGroup;
  constructor(
    private route: ActivatedRoute, 
    private dailyTest: DailyTestService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params
    .subscribe((params: Params) => {
      this.index = + params['id'];
      console.log(this.index);
      this.getQuestion();
    });
  }

  getQuestion() {
    let questions = this.dailyTest.getQuestions();
    console.log(questions);
    if (questions) {
      this.questions = questions;
      this.question = questions[this.index-1];      
      this.questionForm = new FormGroup({
        selectedAnswer: new FormControl(this.question.selectedAnswer)
      });
    } else {
      this.router.navigate(['exam']);
    }

  }

  saveAnswer() {
    this.question.selectedAnswer = this.questionForm.value['selectedAnswer'];
    console.log(this.questionForm.value['selectedAnswer']);
  }

  reviewAnswer() {
    this.router.navigate(['exam','dailytest', 'review']);
  }

  loadNextQuestion() {
    this.router.navigate(['exam', 'dailytest', ++this.index]);
  }

  loadPreviousQuestion() {
    this.router.navigate(['exam', 'dailytest', --this.index])
  }

  markQuestion() {
    this.question.marked = !this.question.marked;
  }

  navigateToQuestion(index: number) {
   this.router.navigate(['exam', 'dailytest', ++index]);
  }

}
