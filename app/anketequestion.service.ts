import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnketequestionService {

  constructor( private http: HttpClient) { }

  getNumAnketaQuestions() {
    return this.http.get('http://localhost:3000/api/anketaquestion/maxid');
  }

  insertAnketaQuestion(q, count) {
    const data = {
      question: q,
      nextId: count + 1
    };
    return this.http.post('http://localhost:3000/api/anketaquestion/insertquestion', data);
  }

  getAnketaQuestions() {
    return this.http.get('http://localhost:3000/api/anketaquestion/getquestions');
  }


}
