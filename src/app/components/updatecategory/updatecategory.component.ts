import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavParams, ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.scss'],
})
export class UpdatecategoryComponent implements OnInit {

  category: any;
  categoryForm: FormGroup;
  isSubmitted = false;

  constructor(
    private apiService: ApiService,
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private navParams: NavParams) {

      this.category = navParams.get('category');
      console.log(this.category._id);
      this.categoryForm = new FormGroup({
      '_id': new FormControl(this.category._id),
      'name': new FormControl(this.category.name),
      'description': new FormControl(this.category.description, [Validators.required])
    });


  }
  ngOnInit() {}


  submitForm() {
    this.isSubmitted = true;
    if (!this.categoryForm.valid) {
      console.log('Por favor')
      return false;
    } else {
      let category = this.categoryForm.value;

      this.apiService.post('category/'+category._id, category).then(res => {
        this.modalController.dismiss();
      }).catch(res => {

      });
      console.log(this.category);
    }

  }

}
