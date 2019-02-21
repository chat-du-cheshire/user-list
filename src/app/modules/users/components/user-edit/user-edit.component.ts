import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../interfaces/IUser';
import {UserService} from '../../services/user.service';
import {ToastrService} from 'ngx-toastr';
import {first, tap} from 'rxjs/operators';
import {StateService} from '@uirouter/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  @Input() user: IUser;

  constructor(private users: UserService, private router: StateService, private toastr: ToastrService) {
  }

  ngOnInit() {
  }

  onSubmit(user: IUser) {
    this.users.update({...this.user, ...user})
      .pipe(
        tap(() => {
          this.toastr.success('User updated!');
          this.router.go('users.user', {id: this.user.id});
        }, () => {
          this.toastr.error('Something went wrong! Please try later!');
          this.router.go('users.user', {id: this.user.id});
        }),
        first())
      .subscribe();
  }
}
