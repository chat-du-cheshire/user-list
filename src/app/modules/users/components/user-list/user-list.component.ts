import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {IColumn} from '../../../app-common/components/table/interfaces/IColumn';

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

  users$ = this.route.data.pipe(map(data => data.users));

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onSelect(user) {
    console.log(user);
  }

}
