import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NavParams, ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  user: any;
  registerForm: FormGroup;
  isSubmitted = false;

  constructor(
    private apiService: ApiService,
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private NavParams: NavParams,

  ) {
    this.registerForm = new FormGroup({
      
      'name': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'surname': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'rut': new FormControl(null, [Validators.required, Validators.minLength(7), Validators.maxLength(8)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'year': new FormControl(null, [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(4),
        Validators.maxLength(4)
      ]),
      'password': new FormControl(null, [Validators.required, Validators.maxLength(32)]),
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
      this.apiService.post('register', user).then(res => {
        this.modalController.dismiss();
      }).catch(res => {

      });
      console.log(this.user);
    }
  }

}
