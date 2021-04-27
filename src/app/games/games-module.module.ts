import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// ******************************** ROUTING ****************************************** //
import { GamesRoutingModule } from './games-routing.module';
// ******************************** COMPONENTS ****************************************** //
import { BoardModule } from './components/board/board.module';
import { LayoutModuleModule } from './components/layout-games/layout.module';
// ******************************** PAGES ****************************************** //
import { PptModule } from './pages/ppt/ppt.module';
import { TatetiModule } from './pages/tateti/tateti.module';
import { MemorizaComponent } from './pages/memoriza/memoriza.component';
import { MaterialModule } from '../material.module';


@NgModule({
  imports: [
    CommonModule,
    PptModule,
    LayoutModuleModule,
    BoardModule,
    TatetiModule,
    GamesRoutingModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [MemorizaComponent],
})
export class GamesModuleModule { }
