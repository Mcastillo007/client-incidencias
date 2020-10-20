import { Component, OnInit } from '@angular/core';
import { SubcategoryService } from 'src/app/services/subcategory.service';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.page.html',
  styleUrls: ['./subcategories.page.scss'],
})
export class SubcategoriesPage implements OnInit {
  subcategories: any = [];

  constructor(private subcategoryService: SubcategoryService) { }

  async  ngOnInit() {
    await this.getSubcategories();
  }

  async getSubcategories(){
    try{
      let subcategoriesResponse: any = await this.subcategoryService.getAll();
        if(null!= subcategoriesResponse){

          console.log(this.subcategories);
          this.subcategories = subcategoriesResponse.subcategories;
          console.log(this.subcategories);
          }
        }catch(ex){
          console.log(ex.error.message)
        }
      }
}