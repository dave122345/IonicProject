import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {  HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MarsPage } from '../pages/mars/mars';
import { IssPage } from '../pages/iss/iss';
import { NasaPage } from '../pages/nasa/nasa';
import { NasaProvider } from '../providers/nasa/nasa';
import { IssProvider } from '../providers/iss/iss';
import { MarsProvider } from '../providers/mars/mars';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NasaPage,
    IssPage,
    MarsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NasaPage,
    IssPage,
    MarsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NasaProvider,
    IssProvider,
    MarsProvider
  ]
})
export class AppModule {}
