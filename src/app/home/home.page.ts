import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {RestautanteService} from '../services/restautante.service';
import {Restaurante} from '../model/restaurante.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  restaurantes: Restaurante[];
  slideOptions = {
    autoplay: true,
    speed: 1000,
    zoom: {
      maxRatio: 5
    }
  };
  constructor(
    private route: Router,
    private storage: Storage,
    private restauranteService: RestautanteService
  ) {}

  ngOnInit(): void {
    this.restauranteService
      .list()
      .subscribe(result => (this.restaurantes = result));

    this.storage.get('usuario').then(result => {
      if (!result) {
        this.route.navigate(['/publico']);
      }
    });
  }

  abrirRestaurante(restaurante: Restaurante) {
    this.route.navigate([`/restaurante/${restaurante.id}`]);
  }
}
