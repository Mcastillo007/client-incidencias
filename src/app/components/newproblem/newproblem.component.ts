import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NavParams, ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { CategoryService } from '../../services/category.service';
import { SubcategoryService } from '../../services/subcategory.service';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-newproblem',
  templateUrl: './newproblem.component.html',
  styleUrls: ['./newproblem.component.scss'],
})
export class NewproblemComponent implements OnInit {

  problem: any;
  problemForm: FormGroup;
  isSubmitted = false;
  categories: any = [];
  subcategories: any = [];
  subjects: any = [];

  constructor(
    private apiService: ApiService,
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private NavParams: NavParams,
    private categoryService: CategoryService,
    private subcategoryService: SubcategoryService,
    private subjectService: SubjectService,

  ) {
    this.categories = NavParams.get('categories');
    this.subcategories = NavParams.get('subcategories');
    this.subjects = NavParams.get('subjects');
    this.problemForm = new FormGroup({
      'description': new FormControl(null, [Validators.required, Validators.minLength(25)]),
    });
  }

  ngOnInit() {}

  submitForm() {
    this.isSubmitted = true;
    if (!this.problemForm.valid) {
      console.log('Complete correctamente todos los campos');
      return false;
    } else {
      let problem = this.problemForm.value;
      this.apiService.post('problem', problem).then(res => {
        this.modalController.dismiss();
      }).catch(res => {

      });
      console.log(this.problem);
    }
  }

}
