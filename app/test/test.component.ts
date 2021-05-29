import { Component, OnInit } from '@angular/core';
import { AnketaAnswer } from '../models/anketaanswers.model';
import { TestAnswerService } from '../testanswer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  selectedAnswers: any[] = new Array();
  test;
  user;
  testAnswer;
  disableanswers = false;
  currentDate;
  unavailable = false;
  isowner = false;
  filledout = false;
  constructor(private testanswerservice: TestAnswerService, private router: Router) { }

  ngOnInit() {

    this.test = JSON.parse(sessionStorage.getItem('test'));
    this.user = JSON.parse(sessionStorage.getItem('user'));

    this.currentDate = new Date();
    const anketaStartDate = new Date(this.test.StartDate.substring(0, this.test.StartDate.length - 1));
    const anketaEndDate = new Date(this.test.EndDate.substring(0, this.test.EndDate.length - 1));


    if (this.user.type === 'kreator' && this.test.Author === this.user.username) {
      this.isowner = true;
      this.disableanswers = true;
    }
    if (this.currentDate.getTime() < anketaStartDate.getTime()
     || this.currentDate.getTime() > anketaEndDate.getTime()) {
      this.unavailable =  true;
      this.disableanswers = true;
    }

    this.testanswerservice.getTestAnswerForUser(this.test.IdT, this.user.username)
    .subscribe( r => {
      const answers = JSON.parse(JSON.stringify(r));
      if (answers) {
        this.filledout = true;
        this.disableanswers = true;
        this.selectedAnswers = answers.Answers;
      } else {

      }
    });

    this.test.Questions.map(question => {
      const idq = parseInt(question.IdQ, 10);
      const questionObject = {
        answers: [],
        idQ: idq
      };
      if (question.Type === 5) {questionObject.answers = new Array(question.NumberAnswers).fill(false)}
      this.selectedAnswers.push(questionObject);
    });

  }

  inputChanged(j, answer) {
    const answers = this.selectedAnswers[j].answers;
    answers.push(answer);
  }

  submit() {
    this.testAnswer = new AnketaAnswer();
    this.testAnswer.User = this.user.username;
    this.testAnswer.IdT = this.test.IdT;
    this.testAnswer.Answers = this.selectedAnswers;
    this.testanswerservice.saveTestAnswer(this.testAnswer).subscribe( r => {
      this.back();
    });
  }

  back() {
    if (this.user.type == 'kreator') {
      this.router.navigate(['/kreator']);
    } else {
      this.router.navigate(['/user']);
    }
  }
}
