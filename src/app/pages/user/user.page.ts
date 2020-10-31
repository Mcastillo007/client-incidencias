import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from './../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  users: any = [];
  constructor(private userService: UserService) { }

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
