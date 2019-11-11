import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Produto} from '../model/produto.model';
import {switchMap} from 'rxjs/operators';
import {ProdutoService} from '../services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss']
})
export class ProdutoPage implements OnInit {
  produto: Produto;

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap(param => {
          const produtoId = param['id'];
          return this.produtoService.getById(produtoId);
        })
      )
      .subscribe(result => (this.produto = result));
  }
}
