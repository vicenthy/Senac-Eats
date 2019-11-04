import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private storage: Storage
  ) {
    this.buildForm();
  }

  ngOnInit() {}
  // Cria instancia do form
  buildForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  // vai para página de cadastro
  cadastro() {
    this.route.navigate(['/publico/cadastro']);
  }
  // faz o login e vai para a pagina home
  async login() {
    await this.storage.set('usuario', 'OK');
    this.route.navigate(['/home']);
  }
}
