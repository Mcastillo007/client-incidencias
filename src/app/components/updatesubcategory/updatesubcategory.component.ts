import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-updatesubcategory',
  templateUrl: './updatesubcategory.component.html',
  styleUrls: ['./updatesubcategory.component.scss'],
})
export class UpdatesubcategoryComponent implements OnInit {

  subcategory: any;
  subcategoryForm: FormGroup;
  isSubmitted = false;

  constructor(
    private apiService: ApiService,
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private navParams: NavParams) {

      this.subcategory = navParams.get('subcategory');
      console.log(this.subcategory._id);
      this.subcategoryForm = new FormGroup({
      '_id': new FormControl(this.subcategory._id),
      'name': new FormControl(this.subcategory.name),
      'description': new FormControl(this.subcategory.description, [Validators.required]),
      'category': new FormControl(this.subcategory.category)
    });


  }
  ngOnInit() {}


  submitForm() {
    this.isSubmitted = true;
    if (!this.subcategoryForm.valid) {
      console.log('Por favor')
      return false;
    } else {
      let subcategory = this.subcategoryForm.value;

      this.apiService.post('subcategory/'+subcategory._id, subcategory).then(res => {
        this.modalController.dismiss();
      }).catch(res => {

      });
      console.log(this.subcategory);
    }

  }

}