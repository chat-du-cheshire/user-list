import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../interfaces/IUser';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  @Input() user: IUser;

  constructor() { }

  ngOnInit() {
  }

}
