import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './components/user-list/user-list.component';
import {HttpClientModule} from '@angular/common/http';
import {AppCommonModule} from '../app-common/app-common.module';
import {UserDetailComponent} from './components/user-detail/user-detail.component';
import {UserCardComponent} from './components/user-card/user-card.component';
import {Ng2StateDeclaration, Transition, UIRouter, UIRouterModule} from '@uirouter/angular';
import {UserService} from './services/user.service';
import {ToastrService} from 'ngx-toastr';
import {ReactiveFormsModule} from '@angular/forms';
import {UserFormComponent} from './components/user-form/user-form.component';
import {UserAddComponent} from './components/user-add/user-add.component';
import {UserEditComponent} from './components/user-edit/user-edit.component';

const randomBoolean = () => !!Math.floor(Math.random() * 10 % 2);

function requireAuthentication(transition) {
  const $state = transition.router.stateService;
  const toastr: ToastrService = transition.injector().get(ToastrService);
  const isAccessGranted = randomBoolean();

  if (isAccessGranted) {
    return Promise.resolve(true);
  }

  toastr.error('Access denied!');
  return Promise.reject().catch(() => $state.target('root'));
}

function uiRouterConfigFn(router: UIRouter) {
  const criteria = {entering: (state) => state.protectMe};
  router.transitionService.onBefore(criteria, requireAuthentication);
}

interface MyRoute extends Ng2StateDeclaration {
  [key: string]: any;
}

const routes: MyRoute[] = [{
  name: 'users',
  url: '/users',
  redirectTo: 'users.list'
}, {
  name: 'users.list',
  url: '',
  views: {
    '!$default': {
      component: UserListComponent,
    }
  },
  resolve: [
    {
      token: 'users',
      deps: [UserService],
      resolveFn: (userSrv: UserService) => userSrv.getList().toPromise()
    }
  ]
}, {
  name: 'users.user',
  url: '/:id',
  views: {
    '!$default': {
      component: UserDetailComponent,
    }
  },
  protectMe: true,
  resolve: [
    {
      token: 'user',
      deps: [Transition, UserService],
      resolveFn: (trans: Transition, userSrv: UserService) => userSrv.get(trans.params().id).toPromise()
    }
  ]
}, {
  name: 'users.edit',
  url: '/:id/edit',
  views: {
    '!$default': {
      component: UserEditComponent
    }
  },
  protectMe: true,
  resolve: [
    {
      token: 'user',
      deps: [Transition, UserService],
      resolveFn: (trans: Transition, userSrv: UserService) => userSrv.get(trans.params().id).toPromise()
    }
  ]
}, {
  name: 'users.add',
  url: '/add',
  component: UserAddComponent,
  views: {
    '!$default': {
      component: UserAddComponent,
    }
  },
  protectMe: true
}];

@NgModule({
  declarations: [UserListComponent, UserDetailComponent, UserCardComponent, UserFormComponent, UserAddComponent, UserEditComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppCommonModule,
    UIRouterModule.forChild({states: routes, config: uiRouterConfigFn})
  ]
})
export class UsersModule {
}
