import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SetLocationPage } from "../pages/set-location/set-location";
import { PlacePage } from "../pages/place/place";
import { AddPlacePage } from "../pages/add-place/add-place";
import { AgmCoreModule } from "angular2-google-maps/core";
import { Geolocation } from "@ionic-native/geolocation";
import { Camera } from '@ionic-native/camera';
import { PlacesService } from "../service/places";
import { File } from '@ionic-native/file';
import { IonicStorageModule } from '@ionic/storage'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddPlacePage,
    PlacePage,
    SetLocationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDFJGKuzZ9X20KJeNQx_QASshWKn9NACP4'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddPlacePage,
    PlacePage,
    SetLocationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    Camera,
    PlacesService,
    File
  ]
})
export class AppModule {}
