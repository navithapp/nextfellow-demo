import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DailyTestService } from 'src/app/shared/daily-test.service';

@Component({
  selector: 'app-exam-home',
  templateUrl: './exam-home.component.html',
  styleUrls: ['./exam-home.component.css']
})
export class ExamHomeComponent implements OnInit {

  constructor(
    private dailyTest: DailyTestService,
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  createExam() {
    this.dailyTest.createExam().subscribe( (exam) => {
      this.router.navigate(['dailytest','1'], { relativeTo: this.route}); 
    });
  }

}
