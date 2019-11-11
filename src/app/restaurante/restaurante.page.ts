import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestautanteService} from '../services/restautante.service';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.page.html',
  styleUrls: ['./restaurante.page.scss']
})
export class RestaurantePage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private restauranteService: RestautanteService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      const restauranteId = param['id'];
      this.restauranteService
        .getRestauranteAndMenu(restauranteId)
        .subscribe(result => {});
    });
  }
}
