import {Component, OnInit} from '@angular/core';
import {IUser} from '../../interfaces/IUser';
import {UserService} from '../../services/user.service';
import {StateService} from '@uirouter/core';
import {ToastrService} from 'ngx-toastr';
import {tap} from 'rxjs/internal/operators/tap';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  constructor(private users: UserService, private router: StateService, private toastr: ToastrService) {
  }

  ngOnInit() {
  }

  onSubmit(user: IUser) {
    this.users.create(user)
      .pipe(tap(() => {
          this.toastr.success('User created!');
          this.router.go('/');
        }, () => {
          this.toastr.error('Something went wrong! Please try later!');
          this.router.go('/');
        }),
        first())
      .subscribe();
  }
}
