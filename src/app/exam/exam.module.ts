import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ExamHomeComponent } from './exam-home/exam-home.component';
import { DailyTestComponent } from './daily-test/daily-test.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReviewTestComponent } from './review-test/review-test.component';
import { ArrayFindPipe } from './array-find.pipe';
import { QuestionSetComponent } from './question-set/question-set.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path: '', component: ExamHomeComponent},
  {path: 'dailytest/review', component: ReviewTestComponent},
  {path: 'dailytest/review/result', component: ResultComponent},
  {path: 'dailytest/:id', component: DailyTestComponent}
];

@NgModule({
  declarations: [
    ExamHomeComponent,
    DailyTestComponent,
    ReviewTestComponent,
    ArrayFindPipe,
    QuestionSetComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class ExamModule { }
