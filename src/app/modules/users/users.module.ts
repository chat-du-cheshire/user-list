import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './components/user-list/user-list.component';
import {Route, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {UsersResolver} from './services/users.resolver';
import {AppCommonModule} from '../app-common/app-common.module';
import {UserDetailComponent} from './components/user-detail/user-detail.component';
import {UserResolver} from './services/user.resolver';
import { UserCardComponent } from './components/user-card/user-card.component';
import {AdminGuard} from '../app-common/services/admin.guard';

const routes: Route[] = [{
  path: 'users',
  component: UserListComponent,
  resolve: {
    users: UsersResolver
  }
}, {
  path: 'users/:id',
  component: UserDetailComponent,
  canActivate: [AdminGuard],
  resolve: {
    user: UserResolver
  }
}];

@NgModule({
  declarations: [UserListComponent, UserDetailComponent, UserCardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AppCommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule {
}
