import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.page.html',
  styleUrls: ['./login1.page.scss'],
})
export class Login1Page implements OnInit {
  user: any = {};
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

 async login(user: any){
  //console.log(user);
  try{
    let userAux: any = await this.authService.login(user);
    localStorage.setItem('token', userAux.token);
    let token = localStorage.getItem('token');
    if(null!=token){
      this.router.navigateByUrl('home');
    }
    console.log(userAux);
  }
  catch(ex){
    console.log(ex.error.message);
  }
  
  
  
 } 

}
