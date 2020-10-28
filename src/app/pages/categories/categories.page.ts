import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreatecategoryComponent } from 'src/app/components/createcategory/createcategory.component';
import { UpdatecategoryComponent } from 'src/app/components/updatecategory/updatecategory.component';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categories: any = [];

  constructor(private categoryService: CategoryService,
              private modalController: ModalController) { }

  async  ngOnInit() {
    await this.getCategories();
  }

  async getCategories(){
    try{
      let categoriesResponse: any = await this.categoryService.getAll();
      if(null!= categoriesResponse){
        this.categories = categoriesResponse.categories;
        console.log(this.categories);
        }
      }catch(ex){
        console.log(ex.error.message)
      }
    }

  async createCategory(){
    let createModal = await this.modalController.create({
      component: CreatecategoryComponent,
    });
    createModal.onDidDismiss().then(res=>{
      this.getCategories();
    });
    return await createModal.present();
  }

  async deleteCategory(id: any){
    this.categoryService.delete(id).then(res=> {
      console.log(res);
      this.getCategories();
    });
  }

  async editCategory(category: any){
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
  }

}