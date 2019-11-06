import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  form: FormGroup;

  constructor(public formBuilder: FormBuilder, private route: Router) {
    this.buildForm();
  }

  ngOnInit() {}

  buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(8)]],
      nome: ['', Validators.required]
    });
  }

  login() {
    this.route.navigate(['/publico']);
  }

  cadastrar() {}
}
