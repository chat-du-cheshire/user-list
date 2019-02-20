import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users$ = this.route.data.pipe(map(data => data.users));

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

}
