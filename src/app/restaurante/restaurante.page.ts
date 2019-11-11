import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RestautanteService} from '../services/restautante.service';
import {Produto} from '../model/produto.model';
import {Restaurante} from '../model/restaurante.model';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.page.html',
  styleUrls: ['./restaurante.page.scss']
})
export class RestaurantePage implements OnInit {
  produtos: Produto[];
  restaurante: Restaurante;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private restauranteService: RestautanteService
  ) {}
  ngOnInit() {
    this.route.params.subscribe(param => {
      const restauranteId = param['id'];
      this.restauranteService
        .getRestauranteAndMenu(restauranteId)
        .subscribe(result => {
          this.restaurante = result[0];
          this.produtos = result[1];
        });
    });
  }

  abrirProduto(produto: Produto) {
    this.router.navigate([`/produto/${produto.id}`]);
  }
}
