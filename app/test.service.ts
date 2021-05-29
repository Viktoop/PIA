import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TestService {



  constructor( private http: HttpClient) { }

  getNumTest() {
    return this.http.get('http://localhost:3000/api/test/maxid');
  }

  getAllTest() {
    return this.http.get('http://localhost:3000/api/test/tests');
  }

  deleteTest(idt) {
    const data = {
      IdT: idt
    };
    console.log(data)
    return this.http.post('http://localhost:3000/api/test/delete', data);
  }

  saveTest(cnt, name, startdate, enddate, time, description, author, questions) {
    const data = {
      IdA: cnt + 1,
      Name: name,
      Time: time,
      StartDate: startdate,
      EndDate: enddate,
      Description: description,
      Author: author,
      Questions: questions
    };
    return this.http.post('http://localhost:3000/api/test/inserttest', data);
  }
}
