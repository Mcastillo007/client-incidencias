import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-updatesubject',
  templateUrl: './updatesubject.component.html',
  styleUrls: ['./updatesubject.component.scss'],
})
export class UpdatesubjectComponent implements OnInit {

  subject: any;
  subjectForm: FormGroup;
  isSubmitted = false;

  constructor(
    private apiService: ApiService,
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private navParams: NavParams) {

      this.subject = navParams.get('subject');
      console.log(this.subject._id);
      this.subjectForm = new FormGroup({
      '_id': new FormControl(this.subject._id),
      'name': new FormControl(this.subject.name),
      'code': new FormControl(this.subject.code),
      'teacher': new FormControl(this.subject.teacher),
    });


  }
  ngOnInit() {}


  submitForm() {
    this.isSubmitted = true;
    if (!this.subjectForm.valid) {
      console.log('Por favor')
      return false;
    } else {
      let subject = this.subjectForm.value;

      this.apiService.post('subject/'+subject._id, subject).then(res => {
        this.modalController.dismiss();
      }).catch(res => {

      });
      console.log(this.subject);
    }

  }

}
