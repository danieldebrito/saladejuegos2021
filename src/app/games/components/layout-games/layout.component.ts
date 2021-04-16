import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutGamesService, GamesMenuItem } from './layout-games.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  menuItems: Observable<GamesMenuItem[]>;

  constructor( private layoutGamesService: LayoutGamesService) { }

  ngOnInit(): void {
    this.menuItems = this.layoutGamesService.getGamesMenuItems();
  }

}
