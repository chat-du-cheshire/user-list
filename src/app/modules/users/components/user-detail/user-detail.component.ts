import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../interfaces/IUser';
import {UserService} from '../../services/user.service';
import {first} from 'rxjs/operators';
import {StateService} from '@uirouter/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  @Input() user: IUser;

  constructor(private userSrv: UserService, private router: StateService) { }

  ngOnInit() {
  }

  onDelete () {
    this.userSrv.delete(this.user).pipe(first())
      .subscribe(() => {
        this.router.go('users');
      });
  }

}
