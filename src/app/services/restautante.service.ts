import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {Restaurante} from '../model/restaurante.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestautanteService {
  constructor(private api: ApiService) {}

  list(): Observable<Restaurante[]> {
    return this.api
      .get('/restaurants')
      .pipe(map((data: Restaurante[]) => data));
  }
}
