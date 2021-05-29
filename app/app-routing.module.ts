import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserComponent } from './user/user.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { QuizzComponent } from './quizz/quizz.component';
import { AdminComponent } from './admin/admin.component';
import { KreatorComponent } from './kreator/kreator.component';
import { NewanketaComponent } from './newanketa/newanketa.component';
import { NewtestComponent } from './newtest/newtest.component';
import { TestComponent } from './test/test.component';
import { AdduserComponent } from './admin-components/adduser/adduser.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user', component: UserComponent },
  { path: 'kreator', component: KreatorComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'newanketa', component: NewanketaComponent},
  { path: 'newtest', component: NewtestComponent},
  { path: 'changepassword', component: ChangepasswordComponent },
  { path: 'quizz', component: QuizzComponent },
  { path: 'test', component: TestComponent},
  { path: 'adduser', component: AdduserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
