import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users = null;
  jusers = [];
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.authService.getAllUsers().subscribe( (data) => {
      console.log(data);
      this.users = data;
    });
  }

  approve(user) {
    this.authService.approveUser(user.username).subscribe ( (data) => {
      console.log(data);
      this.ngOnInit();
    });
  }

  delete(user) {
    this.authService.deleteUser(user.username).subscribe ( (data) => {
      console.log(data);
      //this.ngOnInit();
      this.getAllUsers();
    });
  }

}
