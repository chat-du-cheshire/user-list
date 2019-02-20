import { Component } from '@angular/core';
import {AuthUserService} from './modules/app-common/services/auth-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UserList';
  constructor(public authUser: AuthUserService) {
  }
}
