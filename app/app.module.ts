import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { AuthService } from './auth/auth.service';
import { UserComponent } from './user/user.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { QuizzComponent } from './quizz/quizz.component';
import { AdminComponent } from './admin/admin.component';
import { DatePipe } from '@angular/common';
import { KreatorComponent } from './kreator/kreator.component';
import { NewanketaComponent } from './newanketa/newanketa.component';
import { NewtestComponent } from './newtest/newtest.component';
import { TestComponent } from './test/test.component';
import { AdduserComponent } from './admin-components/adduser/adduser.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    UserComponent,
    ChangepasswordComponent,
    QuizzComponent,
    AdminComponent,
    KreatorComponent,
    NewanketaComponent,
    NewtestComponent,
    TestComponent,
    AdduserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatTooltipModule,
    MatListModule
  ],
  providers: [AuthService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
