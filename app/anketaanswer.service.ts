import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AnketaAnswerService {

  constructor( private http: HttpClient) { }

  saveAnketaAnswer(a) {
    const data = {
      anketa: a
    };
    return this.http.post('http://localhost:3000/api/anketaanswer/insertanketaanswer', data);
  }

  getAnketaAnswerForUser(ida, username) {
    const data = {
      IdA: ida,
      Username: username
    };
    return this.http.post('http://localhost:3000/api/anketaanswer/getanketaanswerforuser', data);
  }

  deleteForId(ida) {
    const data = {
      IdA: ida
    };
    return this.http.post('http://localhost:3000/api/anketaanswer/deleteallid', data);
  }
}
