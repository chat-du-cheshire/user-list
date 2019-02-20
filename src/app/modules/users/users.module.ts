import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './components/user-list/user-list.component';
import {HttpClientModule} from '@angular/common/http';
import {AppCommonModule} from '../app-common/app-common.module';
import {UserDetailComponent} from './components/user-detail/user-detail.component';
import {UserCardComponent} from './components/user-card/user-card.component';
import {UIRouterModule, UIRouter, Transition} from '@uirouter/angular';
import {UserService} from './services/user.service';
import {AuthUserService} from '../app-common/services/auth-user.service';
import {ToastrService} from 'ngx-toastr';

function requireAuthentication(transition) {
  const $state = transition.router.stateService;
  const authSvc: AuthUserService = transition.injector().get(AuthUserService);
  const toastr: ToastrService = transition.injector().get(ToastrService);

  if (authSvc.isAdmin) {
    return Promise.resolve(true);
  }

  toastr.error('Access denied!');
  return Promise.reject().catch(() => $state.target('root'));
}

function uiRouterConfigFn(router: UIRouter) {
  const criteria = { entering: (state) => state.protectMe };
  router.transitionService.onBefore(criteria, requireAuthentication);
}

const routes = [{
  name: 'users',
  component: UserListComponent,
  url: '/users',
  resolve: [
    {
      token: 'users',
      deps: [UserService],
      resolveFn: (userSrv: UserService) => userSrv.getList().toPromise()
    }
  ]
}, {
  name: 'user',
  component: UserDetailComponent,
  url: '/users/:id',
  protectMe: true,
  resolve: [
    {
      token: 'user',
      deps: [Transition, UserService],
      resolveFn: (trans: Transition, userSrv: UserService) => userSrv.get(trans.params().id).toPromise()
    }
  ]
}];

@NgModule({
  declarations: [UserListComponent, UserDetailComponent, UserCardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AppCommonModule,
    UIRouterModule.forChild({states: routes, config: uiRouterConfigFn })
  ]
})
export class UsersModule {
}
