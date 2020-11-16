import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ChartsModule } from 'ng2-charts';
import { ChartsComponent } from 'src/app/components/charts/charts.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ChartsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
