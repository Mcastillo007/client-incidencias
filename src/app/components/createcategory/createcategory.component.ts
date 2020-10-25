import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NavParams, ModalController } from '@ionic/angular';
import { Category } from 'src/app/models/category';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.scss'],
})
export class CreatecategoryComponent implements OnInit {

  category: any;
  categoryForm: FormGroup;
  isSubmitted = false;

  constructor(private apiService: ApiService,
              private modalController: ModalController,
              private formBuilder: FormBuilder,
              private NavParams: NavParams,


  ) {
    this.categoryForm = new FormGroup({

      'name': new FormControl(null),
      'description': new FormControl(null, [Validators.required, Validators.maxLength(10)])
    });
  }
  ngOnInit() {}


  submitForm() {
    this.isSubmitted = true;
    if (!this.categoryForm.valid) {
      console.log('Por favor complete correctamente todos los campos')
      return false;
    } else {
      let category = this.categoryForm.value;

      this.apiService.post('category', category).then(res => {
        this.modalController.dismiss();
      }).catch(res => {

      });
      console.log(this.category);
    }

  }
}
