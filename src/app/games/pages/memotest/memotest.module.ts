import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemotestComponent } from './memotest.component';
import { MemotestRoutingModule } from './memotyest-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MemotestComponent
  ],
  imports: [
    CommonModule,
    MemotestRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ]
})
export class MemotestModule { }
