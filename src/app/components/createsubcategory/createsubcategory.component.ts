import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NavParams, ModalController } from '@ionic/angular';
import { Subcategory } from 'src/app/models/subcategory';
import { Category } from 'src/app/models/category';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-createsubcategory',
  templateUrl: './createsubcategory.component.html',
  styleUrls: ['./createsubcategory.component.scss'],
})
export class CreatesubcategoryComponent implements OnInit {

  subcategory: any;
  subcategoryForm: FormGroup;
  isSubmitted = false;

  constructor(
    private apiService: ApiService,
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private navParams: NavParams
  ) {
    this.subcategoryForm = new FormGroup({
      'name': new FormControl(null),
      'category': new FormControl(null),
      'description': new FormControl(null),
    })
  }

  ngOnInit() {}

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
