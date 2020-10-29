import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NavParams, ModalController } from '@ionic/angular';
import { Subcategory } from 'src/app/models/subcategory';
import { Category } from 'src/app/models/category';
import { ApiService } from 'src/app/services/api.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-createsubcategory',
  templateUrl: './createsubcategory.component.html',
  styleUrls: ['./createsubcategory.component.scss'],
})
export class CreatesubcategoryComponent {

  subcategory: any;
  subcategoryForm: FormGroup;
  isSubmitted = false;
  categories: any = [];

  constructor(
    private apiService: ApiService,
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private navParams: NavParams,
    private categoryService: CategoryService,
  ) {
    this.categories = navParams.get('categories');
    this.subcategoryForm = new FormGroup({
      'name': new FormControl(null),
      'category': new FormControl(null),
      'description': new FormControl(null),
    });
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.subcategoryForm.valid) {
      console.log('Por favor complete correctamente todos los campos');
      return false;
    } else {
      let subcategory = this.subcategoryForm.value;

      this.apiService.post('subcategory', subcategory).then(res => {
        this.modalController.dismiss();
      }).catch(res => {

      });
      console.log(this.subcategory);
    }

  }
}
