import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import jwt_decode from "jwt-decode";
import { ModalController } from '@ionic/angular';
import { RegisterComponent } from 'src/app/components/register/register.component';
@Component({
  selector: 'app-login1',
  templateUrl: './login1.page.html',
  styleUrls: ['./login1.page.scss'],
})
export class Login1Page implements OnInit {
  user: any = {};
  constructor(
    private authService: AuthService,
    private router: Router,
    private modalController: ModalController

    ) { }

  ngOnInit() {
  }

  async login(user: any) {
    //console.log(user);
    try {
      let userAux: any = await this.authService.login(user);
      localStorage.setItem('token', userAux.token);
      let token = localStorage.getItem('token');
      var decoded = jwt_decode(token);
      localStorage.setItem('user', JSON.stringify(decoded));
      if (null != token) {
        this.router.navigateByUrl('home');
      }
      console.log(userAux);
    }
    catch (ex) {
      console.log(ex);
    }
  }

  parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  };

  async register(){
    let createModal = await this.modalController.create({
      component: RegisterComponent,
    });
    createModal.onDidDismiss().then(res => {
      //this.register();
    });
    return await createModal.present();
  }


}
