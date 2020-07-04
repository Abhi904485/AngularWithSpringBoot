import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ErrorComponent} from './error/error.component';
import {RouteGuardService} from './service/route-guard.service';
import {TodoComponent} from './todo/todo.component';
import {LogoutComponent} from './logout/logout.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService]},
  {path: 'welcome/:username', component: WelcomeComponent, canActivate: [RouteGuardService]},
  {path: 'todos', component: TodoListComponent, canActivate: [RouteGuardService]},
  {path: 'todos/:id', component: TodoComponent, canActivate: [RouteGuardService]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
