import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Login1PageRoutingModule } from './login1-routing.module';

import { Login1Page } from './login1.page';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ApiService } from 'src/app/services/api.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Login1PageRoutingModule
  ],
  declarations: [Login1Page],
  providers: [AuthService,ApiService]
})
export class Login1PageModule {}
