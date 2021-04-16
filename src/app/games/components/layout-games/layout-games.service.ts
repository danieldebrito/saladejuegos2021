import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface GamesMenuItem {
  redirectTo: string;
  name: string;
  img: string;
  detalle: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class LayoutGamesService {

  constructor( private http: HttpClient ) { }

  getGamesMenuItems(): any{
    return this.http.get<GamesMenuItem[]>('/assets/games/games-menu.json');
  }
}



