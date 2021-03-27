import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { StickyComponent } from './components/sticky/sticky.component';

import { HomeModule } from './pages/home/home.module';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    StickyComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HomeModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
