import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.scss'],
})
export class UpdateuserComponent implements OnInit {
  user: any;
  registerForm: FormGroup;
  isSubmitted = false;

  constructor(
    private apiService: ApiService,
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private navParams: NavParams,

  ) {
    this.user = navParams.get('user');
    console.log(this.user._id);
    this.registerForm = new FormGroup({
      '_id': new FormControl(this.user._id),
      'name': new FormControl(this.user.name),
      'surname': new FormControl(this.user.surname),
      'rut': new FormControl(this.user.rut),
      'email': new FormControl(this.user.email),
      'year': new FormControl(this.user.date),
      'password': new FormControl(null),
    });
  }

  ngOnInit() {}

  submitForm() {
    this.isSubmitted = true;
    if (!this.registerForm.valid) {
      console.log('Complete correctamente todos los campos');
      return false;
    } else {
      let user = this.registerForm.value;
      this.apiService.post('update-user/'+ user._id, user).then(res => {
        this.modalController.dismiss();
      }).catch(res => {

      });
      console.log(this.user);
    }
  }

}