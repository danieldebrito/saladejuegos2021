import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// services
import { HttpClientModule } from '@angular/common/http';
import { LayoutModuleRoutingModule } from './layout-routing.module';
// components
import { LayoutComponent } from './layout.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutModuleRoutingModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class LayoutModuleModule { }
