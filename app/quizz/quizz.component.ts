import { Component, OnInit } from '@angular/core';
import { AnketaAnswer } from '../models/anketaanswers.model';
import { AnketaAnswerService } from '../anketaanswer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {


  selectedAnswers: any[] = new Array();
  quizz;
  user;
  anketaAnswer;
  disableanswers = false;
  currentDate;
  unavailable = false;
  isowner = false;
  filledout = false;
  constructor(private anketaanswerservice: AnketaAnswerService, private router: Router) { }

  ngOnInit() {

    this.quizz = JSON.parse(sessionStorage.getItem('anketa'));
    this.user = JSON.parse(sessionStorage.getItem('user'));

    this.currentDate = new Date();
    const anketaStartDate = new Date(this.quizz.StartDate.substring(0, this.quizz.StartDate.length - 1));
    const anketaEndDate = new Date(this.quizz.EndDate.substring(0, this.quizz.EndDate.length - 1));


    if (this.user.type === 'kreator' && this.quizz.Author === this.user.username) {
      this.isowner = true;
      this.disableanswers = true;
    }
    if (this.currentDate.getTime() < anketaStartDate.getTime()
     || this.currentDate.getTime() > anketaEndDate.getTime()) {
      this.unavailable =  true;
      this.disableanswers = true;
    }

    this.anketaanswerservice.getAnketaAnswerForUser(this.quizz.IdA, this.user.username)
    .subscribe( r => {
      const answers = JSON.parse(JSON.stringify(r));
      if (answers) {
        this.filledout = true;
        this.disableanswers = true;
        this.selectedAnswers = answers.Answers;
      } else {

      }
    });

    this.quizz.Questions.map(question => {
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
    this.anketaAnswer = new AnketaAnswer();
    this.anketaAnswer.User = this.user.username;
    this.anketaAnswer.IdA = this.quizz.IdA;
    this.anketaAnswer.Answers = this.selectedAnswers;
    this.anketaanswerservice.saveAnketaAnswer(this.anketaAnswer).subscribe( r => {
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
