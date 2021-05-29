import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailValidator } from '@angular/forms';
import { Subject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  authStatusListener = new Subject<boolean>();
  authUsernameListener = new Subject<string>();
  authIsAdminListener = new Subject<boolean>();
  authUserTypeListener = new Subject<string>();

  constructor( private http: HttpClient) { }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getAuthUsernameListener() {
    return this.authUsernameListener.asObservable();
  }

  getAuthIsAdminListener() {
    return this.authIsAdminListener.asObservable();
  }

  geUserTypeListener() {
    return this.authUserTypeListener.asObservable();
  }

  getNumEmails(e: string) {
    const email = { e };
    return this.http.post('http://localhost:3000/api/user/numemails', email);
  }


  signup(name,
         lastName,
         username,
         password,
         birthdate,
         birthplace,
         jmbg,
         phoneNumber,
         email) {
    const user = {
      name,
      lastName,
      username,
      password,
      birthdate,
      birthplace,
      jmbg,
      phoneNumber,
      email,
      type : 'user',
      approved : false
      };
    return this.http.post('http://localhost:3000/api/user/signup', user);
  }

  addUser(name,
          lastName,
          username,
          password,
          birthdate,
          birthplace,
          jmbg,
          phoneNumber,
          email,
          type) {
    const user = {
    name,
    lastName,
    username,
    password,
    birthdate,
    birthplace,
    jmbg,
    phoneNumber,
    email,
    type,
    approved : true
    };
    return this.http.post('http://localhost:3000/api/user/signup', user);
  }

  login(username,
        password) {
    const data = {
      username,
      password
    };

    return this.http.post('http://localhost:3000/api/user/login', data);
  }

  changePassword(username, password) {
    const data = {
      username,
      password
    };

    return this.http.post('http://localhost:3000/api/user/changepassword', data);
  }

  getAllUsers() {
    return this.http.get('http://localhost:3000/api/user/getallusers');
  }

  approveUser(username) {
    const data = { username };
    return this.http.post('http://localhost:3000/api/user/approve', data);
  }

  deleteUser(username) {
    const data = { username };
    return this.http.post('http://localhost:3000/api/user/delete', data);
  }

}
