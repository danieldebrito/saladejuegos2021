import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemotestComponent } from './memotest.component';
import { MemotestRoutingModule } from './memotyest-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    MemotestComponent
  ],
  imports: [
    CommonModule,
    MemotestRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class MemotestModule { }
