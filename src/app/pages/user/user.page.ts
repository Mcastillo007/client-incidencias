import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { User } from './../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  users: any = [];
  constructor(private userService: UserService,private alertCtrl: AlertController) { }

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

  /*async createSubject(){
    let createModal = await this.modalController.create({
      component: CreatesubjectComponent,
    });
    createModal.onDidDismiss().then(res=>{
      this.getSubjects();
    });
    return await createModal.present();
  }
*/
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
/*
  async editSubject(subject: any){
    let createModal = await this.modalController.create({
      component: UpdatesubjectComponent,
      componentProps: {
        subject: subject,
      }
    });
    createModal.onDidDismiss().then(res=>{
      this.getSubjects();
    });
    return await createModal.present();
  }
*/
}
