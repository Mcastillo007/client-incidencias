import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private api: ApiService) { }

  async login(user:any){
    console.log(user);
    return await this.api.post('login', user);
  }
  async isLoged(){
    return JSON.parse(localStorage.getItem('user'));
  }

  async register(user: any) {
    return await this.api.post('register', user);
  }
}
