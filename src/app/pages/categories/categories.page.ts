import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categories: any = [];

  constructor(private categoryService: CategoryService) { }

  async  ngOnInit() {
    await this.getCategories();
  }

  async getCategories(){
    try{
      let categoriesResponse: any = await this.categoryService.getAll();
        if(null!= categoriesResponse){

          //console.log(problems);
          this.categories = categoriesResponse.categories;
          console.log(this.categories);
          }
        }catch(ex){
          console.log(ex.error.message)
        }
      }
}