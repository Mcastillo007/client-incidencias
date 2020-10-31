import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  getAll(){
    return this.apiService.get('users', null);
  }

  getById(id: String){
    return this. apiService.get('user/'+id, null);
  }

  delete(id: any){
    return this.apiService.delete('user/' + id, null);
  }

}
