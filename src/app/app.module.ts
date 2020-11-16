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
import { RegisterComponent } from './components/register/register.component';
import { UpdatesubjectComponent } from './components/updatesubject/updatesubject.component';
import { NewproblemComponent } from './components/newproblem/newproblem.component';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { ChartsModule } from 'ng2-charts';
import { PipesModule } from './pipes/pipes.module';
import { ChartsComponent } from './components/charts/charts.component';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';

let firebase: {
  apiKey: 'AIzaSyAqVASDwDM9-WbLhisUS8XARsAGsbOVBHk',
  authDomain: 'software-2-d401f.firebaseapp.com',
  databaseURL: 'https://software-2-d401f.firebaseio.com',
  projectId: 'software-2-d401f',
  storageBucket: 'software-2-d401f.appspot.com',
  messagingSenderId: '193879742095',
  appId: '1:193879742095:web:7f0f866b78b642205702fa'
}



@NgModule({
  declarations: [
    AppComponent,
    CreatesubcategoryComponent,
    CreatecategoryComponent,
    UpdatecategoryComponent,
    RegisterComponent,
    CreatesubjectComponent,
    UpdatesubjectComponent,
    NewproblemComponent,
    CreateuserComponent,
    UpdateuserComponent,
    

  ],

  entryComponents: [],
  imports: [
    PipesModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireStorageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: BUCKET, useValue: 'software-2-d401f.appspot.com' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
