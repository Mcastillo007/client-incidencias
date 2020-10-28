import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreatesubcategoryComponent } from 'src/app/components/createsubcategory/createsubcategory.component';
import { SubcategoryService } from 'src/app/services/subcategory.service';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.page.html',
  styleUrls: ['./subcategories.page.scss'],
})
export class SubcategoriesPage implements OnInit {
  subcategories: any = [];

  constructor(
    private subcategoryService: SubcategoryService,
    private modalController: ModalController,
    ) { }

  async  ngOnInit() {
    await this.getSubcategories();
  }

  async getSubcategories(){
    try{
      let subcategoriesResponse: any = await this.subcategoryService.getAll();
      if (null != subcategoriesResponse){

        console.log(this.subcategories);
        this.subcategories = subcategoriesResponse.subcategories;
        console.log(this.subcategories);
      }
    }catch (ex){
      console.log(ex.error.message)
    }
  }
  
  async createSubcategory(){
    let createModal = await this.modalController.create({
      component: CreatesubcategoryComponent,
    });
    createModal.onDidDismiss().then(res => {
      this.getSubcategories();
    });
    return await createModal.present();
  }

  async deleteSubcategory(id: any){
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