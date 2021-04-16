import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PptComponent } from './ppt.component';
import { AgilidadRoutingModule } from './ppt-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
@NgModule({
  declarations: [PptComponent],
  imports: [
    CommonModule,
    AgilidadRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class PptModule { }
