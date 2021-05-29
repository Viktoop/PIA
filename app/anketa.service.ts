import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AnketaService {



  constructor( private http: HttpClient) { }

  getNumAnketa() {
    return this.http.get('http://localhost:3000/api/anketa/maxid');
  }

  getAllAnketa() {
    return this.http.get('http://localhost:3000/api/anketa/ankete');
  }

  deleteAnketa(ida) {
    const data = {
      IdA: ida
    };
    return this.http.post('http://localhost:3000/api/anketa/delete', data);
  }

  saveAnketa(cnt, name, type, startdate, enddate, description, author, questions) {
    const data = {
      IdA: cnt + 1,
      Name: name,
      Type: type,
      StartDate: startdate,
      EndDate: enddate,
      Description: description,
      Author: author,
      Questions: questions
    };
    console.log(data);
    return this.http.post('http://localhost:3000/api/anketa/insertanketa', data);
  }
}
