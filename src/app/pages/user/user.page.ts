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
}
