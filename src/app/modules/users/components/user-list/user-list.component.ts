import {Component, Input, OnInit} from '@angular/core';
import {IColumn} from '../../../app-common/components/table/interfaces/IColumn';
import {IUser} from '../../interfaces/IUser';
import {StateService} from '@uirouter/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  columns: IColumn[] = [{
    label: '#',
    property: 'id'
  }, {
    label: 'Surname',
    property: 'lastName'
  }, {
    label: 'First Name',
    property: 'firstName'
  }, {
    label: 'Email',
    property: 'email'
  }];

  @Input() users: IUser[];

  constructor(private router: StateService) {
  }

  ngOnInit() {
  }

  onSelect(user) {
    this.router.go('users.user', {id: user.id});
  }

  onEdit(user) {
    this.router.go('users.edit', {id: user.id});
  }


}
