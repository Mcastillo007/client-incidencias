import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NewproblemComponent } from 'src/app/components/newproblem/newproblem.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  problem: any = {};
  categories: any = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private modalController: ModalController,
    private categoryService: CategoryService,
  ) { }

  async ngOnInit() {
    await this.getCategories();
  }
  async newproblem(){
    let createModal = await this.modalController.create({
      component: NewproblemComponent,
      componentProps: {
        categories: this.categories
      }
    });
    createModal.onDidDismiss().then(res => {
    }); 
    return await createModal.present();
  }
  async getCategories() {
    try {
      let categoriesResponse: any = await this.categoryService.getAll();
      if (null != categoriesResponse) {
        this.categories = categoriesResponse.categories;
        console.log(this.categories);
      }
    } catch (ex) {
      console.log(ex.error.message)
    }
  }
}
