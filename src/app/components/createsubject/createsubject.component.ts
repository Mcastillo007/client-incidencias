import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NavParams, ModalController } from '@ionic/angular';
import { Subject } from 'src/app/models/subject';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-createsubject',
  templateUrl: './createsubject.component.html',
  styleUrls: ['./createsubject.component.scss'],
})
export class CreatesubjectComponent implements OnInit {

  subject: any;
  subjectForm: FormGroup;
  isSubmitted = false;


  constructor(private apiService: ApiService,
              private NavParams: NavParams,
              private formBuilder: FormBuilder,
              private modalController: ModalController,
              
){
  this.subjectForm = new FormGroup({

    'name': new FormControl(null),
    'code': new FormControl(null),
    'teacher': new FormControl(null),
  });
}

  ngOnInit() {}

  submitForm() {
    this.isSubmitted = true;
    if (!this.subjectForm.valid) {
      console.log('Por favor complete correctamente todos los campos');
      return false;
    } else {
      let subject = this.subjectForm.value;

      this.apiService.post('subject', subject).then(res => {
        this.modalController.dismiss();
      }).catch(res => {

      });
      console.log(this.subject);
    }

  }

}
