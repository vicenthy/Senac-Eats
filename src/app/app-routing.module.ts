import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LogoutComponent} from './logout/logout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'logout',
    component: LogoutComponent,
    pathMatch: 'full'
  },
  {
    path: 'publico',
    loadChildren: () =>
      import('./publico/publico.module').then(m => m.PublicoModule)
  },
  {
    path: 'produto/:id',
    loadChildren: './produto/produto.module#ProdutoPageModule'
  },
  {
    path: 'restaurante/:id',
    loadChildren: './restaurante/restaurante.module#RestaurantePageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
