import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// ******************************** ROUTING ****************************************** //
// ******************************** COMPONENTS ****************************************** //
import { BoardModule } from './components/board/board.module';
import { LayoutModuleModule } from './components/layout-games/layout.module';
// ******************************** PAGES ****************************************** //
import { PptModule } from './pages/ppt/ppt.module';
import { TatetiModule } from './pages/tateti/tateti.module';


@NgModule({
  imports: [
    CommonModule,
    PptModule,
    LayoutModuleModule,
    BoardModule,
    TatetiModule,
  ],
})
export class GamesModuleModule { }
