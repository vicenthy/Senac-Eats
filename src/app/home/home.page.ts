import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  constructor(private route: Router, private storage: Storage) {}

  slideOptions = {
    autoplay: true,
    speed: 1000,
    zoom: {
      maxRatio: 5
    }
  };

  ngOnInit(): void {
    this.storage.get('usuario').then(result => {
      if (!result) {
        this.route.navigate(['/publico']);
      }
    });
  }
}
