import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {IonicStorageModule} from '@ionic/storage';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LogoutComponent} from './logout/logout.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, LogoutComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot({
      name: '_db_senac-eats',
      driverOrder: ['sqlite', 'localstorage']
    }),
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
