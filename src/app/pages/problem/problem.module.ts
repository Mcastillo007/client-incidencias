import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProblemPageRoutingModule } from './problem-routing.module';

import { ProblemPage } from './problem.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { NgxFileDropModule } from 'ngx-file-drop';


@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ProblemPageRoutingModule,
    NgxFileDropModule
  ],
  declarations: [ProblemPage]
})
export class ProblemPageModule {}
