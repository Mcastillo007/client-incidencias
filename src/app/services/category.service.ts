import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private apiService: ApiService) { }

  getAll(){
    return this.apiService.get('categories', null);
  }

  getById(id: String){
    return this.apiService.get('category/'+id, null);
  }

  create(category: any){
    console.log(category);
    return this.apiService.post('category', category);
  }

  delete(id: any){
    return this.apiService.delete('category/' + id, null);
  }



}
