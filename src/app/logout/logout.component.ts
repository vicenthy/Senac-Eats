import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-logout',
  templateUrl: 'logout.componet.html'
})
export class LogoutComponent {
  constructor(private route: Router, private storage: Storage) {}

  ionViewWillEnter() {
    this.storage.clear();
    this.route.navigate(['/publico']);
  }
}
