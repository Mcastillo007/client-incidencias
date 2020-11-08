import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { CreateuserComponent } from 'src/app/components/createuser/createuser.component';
import { UpdateuserComponent } from 'src/app/components/updateuser/updateuser.component';
import { UserService } from 'src/app/services/user.service';
import { User } from './../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  users: any = [];
  constructor(private userService: UserService,
              private alertCtrl: AlertController,
              private modalController: ModalController,) { }

  async ngOnInit() {
    await this.getUsers();
  }
  async getUsers(){
    try{
      let usersResponse: any = await this.userService.getAll();
      if(null != usersResponse){
        this.users = usersResponse.users;
      }
    }catch(ex){
      console.log(ex.error.messaje);
    }
  }

  async createUser(){
    let createModal = await this.modalController.create({
      component: CreateuserComponent,
    });
    createModal.onDidDismiss().then(res=>{
      this.getUsers();
    });
    return await createModal.present();
  }

async showConfirmAlert(id: any) {
  let alert = this.alertCtrl.create({
    message: '¿Estas seguro de borrar este usuario?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Eliminar',
        handler: () => {
          this.userService.delete(id).then(res=> {
            console.log(res);
            this.getUsers();
          });
          console.log('Buy clicked');
        }
      }
    ]
  });
  (await alert).present();
  }
  async deleteUser(id: any){
    this.userService.delete(id).then(res=> {
      console.log(res);
      this.getUsers();
    });
  }

  async editUser(user: any){
    let createModal = await this.modalController.create({
      component: UpdateuserComponent,
      componentProps: {
        user: user,
      }
    });
    createModal.onDidDismiss().then(res=>{
      this.getUsers();
    });
    return await createModal.present();
  }
}
