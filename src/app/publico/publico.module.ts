import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {CadastroComponent} from './cadastro/cadastro.component';
import {LogoutComponent} from '../logout/logout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  }
];

@NgModule({
  declarations: [LoginComponent, CadastroComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PublicoModule {}
