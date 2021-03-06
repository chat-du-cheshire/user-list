import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IColumn} from './interfaces/IColumn';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() columns: IColumn[];
  @Input() items: any[];
  @Output() select = new EventEmitter();
  @Input() canEdit = false;
  @Output() edit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  click(item) {
    this.select.emit(item);
  }

  onEdit(event, item) {
    event.stopPropagation();
    this.edit.emit(item);
  }
}
