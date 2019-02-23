import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../interfaces/IUser';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  defaultImg = 'https://picsum.photos/500';
  @Input() user: IUser;
  constructor() { }

  ngOnInit() {
  }

}
