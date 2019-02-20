import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user$ = this.route.data.pipe(map(data => data.user));

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
