import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { CreatesubcategoryComponent } from 'src/app/components/createsubcategory/createsubcategory.component';
import { CategoryService } from 'src/app/services/category.service';
import { SubcategoryService } from 'src/app/services/subcategory.service';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.page.html',
  styleUrls: ['./subcategories.page.scss'],
})
export class SubcategoriesPage implements OnInit {

  subcategories: any = [];
  categories: any[];

  constructor(
    private subcategoryService: SubcategoryService,
    private modalController: ModalController,
    private categoriesService: CategoryService,
    private alertCtrl: AlertController,
  ) { }

  async ngOnInit() {
    await this.getSubcategories();
    await this.getCategories();
  }


  async getCategories() {
    try {
      let categoriesResponse: any = await this.categoriesService.getAll();
      if (null != categoriesResponse) {
        this.categories = categoriesResponse.categories;
        console.log(this.categories);
      }
    } catch (ex) {
      console.log(ex.error.message)
    }
  }
  async showConfirmAlert(id: any) {
    let alert = this.alertCtrl.create({
      message: '¿Estas seguro de borrar esta subcategoria?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.subcategoryService.delete(id).then(res => {
              console.log(res);
              this.getSubcategories();
            });
            console.log('Buy clicked');
          }
        }
      ]
    });
    (await alert).present();
  }

  async getSubcategories() {
    try {
      let subcategoriesResponse: any = await this.subcategoryService.getAll();
      if (null != subcategoriesResponse) {

        console.log(this.subcategories);
        this.subcategories = subcategoriesResponse.subcategories;
        console.log(this.subcategories);
      }
    } catch (ex) {
      console.log(ex.error.message)
    }
  }

  async createSubcategory() {
    let createModal = await this.modalController.create({
      component: CreatesubcategoryComponent,
      componentProps: {
        categories: this.categories
      }
    });
    createModal.onDidDismiss().then(res => {
      this.getSubcategories();
    });
    return await createModal.present();
  }

  async deleteSubcategory(id: any) {
    this.subcategoryService.delete(id).then(res => {
      console.log(res);
      this.getSubcategories();
    });
  }

  /*async editCategory(category: any){
    let createModal = await this.modalController.create({
      component: UpdatecategoryComponent,
      componentProps: {
        category: category,
      }
    });
    createModal.onDidDismiss().then(res=>{
      this.getCategories();
    });
  return await createModal.present();
  }*/
}