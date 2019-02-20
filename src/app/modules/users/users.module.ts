import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import {Route, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

const routes: Route[] = [{
  path: 'users',
  component: UserListComponent
}];

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
