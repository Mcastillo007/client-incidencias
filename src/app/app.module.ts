import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatecategoryComponent } from './components/createcategory/createcategory.component';
import { UpdatecategoryComponent } from './components/updatecategory/updatecategory.component';
import { CreatesubcategoryComponent } from './components/createsubcategory/createsubcategory.component';
import { CreatesubjectComponent } from './components/createsubject/createsubject.component';
import { UpdatesubjectComponent } from './components/updatesubject/updatesubject.component';


@NgModule({
  declarations: [AppComponent, CreatesubcategoryComponent, CreatecategoryComponent, UpdatecategoryComponent,CreatesubjectComponent, UpdatesubjectComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
