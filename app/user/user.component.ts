import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnketaService } from '../anketa.service';
import { TestService } from '../test.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  ankete;
  testovi;
  anktest = false;
  constructor(private anketaService: AnketaService,
              private testService: TestService,
              private router: Router) { }

  ngOnInit() {
    this.anketaService.getAllAnketa().subscribe( ank => {
      this.ankete = JSON.parse(JSON.stringify(ank));
      this.testService.getAllTest().subscribe( tst => {
        this.testovi = JSON.parse(JSON.stringify(tst));
      });
    });
  }

  onClickAnketa(anketa) {
    sessionStorage.setItem('anketa', JSON.stringify(anketa));
    this.router.navigate(['quizz'], {skipLocationChange: true});
  }

  onClickTest(test) {
    sessionStorage.setItem('test', JSON.stringify(test));
    this.router.navigate(['test'], {skipLocationChange: true});
  }

  setAnkete() {
    this.anktest = false;
  }

  setTests() {
    this.anktest = true;
  }
}
