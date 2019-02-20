import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
  @Output() toggle = new EventEmitter<boolean>();
  @Input() isAdmin = true;
  constructor() { }

  ngOnInit() {
  }

}
