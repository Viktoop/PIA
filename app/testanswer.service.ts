import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TestAnswerService {

  constructor( private http: HttpClient) { }

  saveTestAnswer(t) {
    const data = {
      test: t
    };
    return this.http.post('http://localhost:3000/api/testanswer/inserttestanswer', data);
  }

  getTestAnswerForUser(idt, username) {
    const data = {
      IdT: idt,
      Username: username
    };
    return this.http.post('http://localhost:3000/api/testanswer/gettestanswerforuser', data);
  }

  deleteForId(idt) {
    const data = {
      IdT: idt
    };
    return this.http.post('http://localhost:3000/api/testanswer/deleteallid', data);
  }
}
