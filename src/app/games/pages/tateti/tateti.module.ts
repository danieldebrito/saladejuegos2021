import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TatetiComponent } from './tateti.component';
import { TatetiRoutingModule } from './tateti-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [TatetiComponent],
  imports: [
    CommonModule,
    TatetiRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class TatetiModule { }
