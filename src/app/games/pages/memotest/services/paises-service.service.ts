import { Injectable } from '@angular/core';
import { Pais } from 'src/app/class/pais';
import { BaseService } from './base-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(public miHttp: BaseService) { }

  public ListarO(): Observable<Pais[]> {
    return this.miHttp.httpGetO<Pais[]>('/americas');
  }

}