import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  invalid = false;
  invalidOld = false;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onChange(passwordForm: NgForm) {

    if ( passwordForm.value.oldpassword === '' || passwordForm.value.newpassword === '') {
      this.invalid = true;
      this.router.navigate(['/changepassword'], { skipLocationChange: true });
    } else {

      let user = sessionStorage.getItem('user');
      let json = JSON.parse(user);

      if ( passwordForm.value.oldpassword !== json.password) {
        this.invalidOld = true;
        this.router.navigate(['/changepassword'], { skipLocationChange: true });
      } else {
        this.invalidOld = false;
        this.authService.changePassword(json.username, passwordForm.value.newpassword).subscribe((data) => {
          alert('Password changed');
          this.authService.authStatusListener.next(false);
          this.authService.authUsernameListener.next('');
          this.router.navigate(['/login'], { skipLocationChange: true });
          console.log(data);
        });
        console.log(passwordForm.value.newpassword);
      }
    }
  }
}
