import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  usernameUnique = true;
  date = null;
  invalid = false;
  jmbgcorrectformat = true;
  name = null;
  invalidEmail = false;
  phonenumbercorrect = true;
  type = 'user';
  constructor( public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSignup(signupForm: NgForm) {
    if (signupForm.value.name === '' ||
        signupForm.value.lastname === '' ||
        signupForm.value.username === '' ||
        signupForm.value.password1 === '' ||
        signupForm.value.password2 === '' ||
        signupForm.value.date === '' ||
        this.date === null ||
        signupForm.value.birthplace === '' ||
        signupForm.value.jmbg === '' ||
        signupForm.value.phonenumber === '' ||
        signupForm.value.email === ''
      ) { this.invalid = true;
    } else {
      this.authService.getNumEmails(signupForm.value.email).subscribe((count) => {
        if (count) {
          this.invalidEmail = true;
        } else {
          this.invalidEmail = false;
        }
      });
      if (!this.invalidEmail && this.jmbgcorrectformat) {
        this.authService.addUser(signupForm.value.name,
                                signupForm.value.lastname,
                                signupForm.value.username,
                                signupForm.value.password1,
                                this.date,
                                signupForm.value.birthplace,
                                signupForm.value.jmbg,
                                signupForm.value.phonenumber,
                                signupForm.value.email,
                                this.type)
          .subscribe((user) => {
            if (user) {
              console.log(user);
            } else {
              console.log(user);
            }
            this.router.navigate(['/admin'], {skipLocationChange: true});
          });
      }

      }
  }

    test(signupForm: NgForm) {

  }
}
