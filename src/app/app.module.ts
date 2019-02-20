import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UsersModule} from './modules/users/users.module';
import {AppCommonModule} from './modules/app-common/app-common.module';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UIRouterModule} from '@uirouter/angular';

const routes = [{
  name: 'root',
  url: '/',
  redirectTo: 'users'
}];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppCommonModule,
    UsersModule,
    UIRouterModule.forRoot({states: routes})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
