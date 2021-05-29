import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalid = false;
  invalidCredentials = false;
  unapproved = false;

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit() {
  }

  onLogin(loginForm: NgForm) {
    if ( loginForm.value.username === '' || loginForm.value.password === '') {
      this.invalid = true;
      this.router.navigate(['/login', { skipLocationChange: true }]);
    } else {
      this.authService.login(loginForm.value.username, loginForm.value.password).subscribe( user => {
        if (user) {
          this.invalidCredentials = false;
          const jUser = JSON.parse(JSON.stringify(user));
          if (jUser.approved) {
            this.unapproved = false;
            sessionStorage.setItem('user', JSON.stringify(user));
            this.authService.authStatusListener.next(true);
            this.authService.authUsernameListener.next(jUser.username);
            this.authService.authUserTypeListener.next(jUser.type);
            if (jUser.type === 'user') {
              this.router.navigate(['/user'], { skipLocationChange: true });
            } else {
                if (jUser.type === 'admin') {
                  this.authService.authIsAdminListener.next(true);
                  this.router.navigate(['/admin'], { skipLocationChange: true });
                } else {
                  this.router.navigate(['/kreator'], { skipLocationChange: true });
                }
              }
            } else {
              this.unapproved = true;
            }
        } else {
          this.invalidCredentials = true;
          console.log(user);
        }
      });
    }

  }
}
