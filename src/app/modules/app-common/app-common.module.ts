import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { ControlComponent } from './components/control/control.component';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [TableComponent, ControlComponent],
  exports: [TableComponent, ControlComponent],
  imports: [
    CommonModule,
    ToastrModule
  ]
})
export class AppCommonModule { }
