import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import {Route, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {UsersResolver} from './services/users.resolver';
import {AppCommonModule} from '../app-common/app-common.module';

const routes: Route[] = [{
  path: 'users',
  component: UserListComponent,
  resolve: {
    users: UsersResolver
  }
}];

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AppCommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
