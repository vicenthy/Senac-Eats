import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {Observable, pipe} from 'rxjs';
import {Produto} from '../model/produto.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  constructor(private api: ApiService) {}

  getById(id): Observable<Produto> {
    return this.api.get(`/menu/${id}`).pipe(map((data: Produto) => data));
  }
}
