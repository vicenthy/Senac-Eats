import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {RestautanteService} from '../services/restautante.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  constructor(
    private route: Router,
    private storage: Storage,
    private restauranteService: RestautanteService
  ) {}

  slideOptions = {
    autoplay: true,
    speed: 1000,
    zoom: {
      maxRatio: 5
    }
  };

  ngOnInit(): void {
    this.restauranteService.list().subscribe(result => console.log(result));

    this.storage.get('usuario').then(result => {
      if (!result) {
        this.route.navigate(['/publico']);
      }
    });
  }
}
