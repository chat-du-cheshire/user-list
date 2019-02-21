import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUser} from '../../interfaces/IUser';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() user: IUser;
  @Output() submit = new EventEmitter<IUser>();

  formItem = new FormGroup({
    age: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    company: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    about: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submit.emit(this.formItem.value);
  }

}
