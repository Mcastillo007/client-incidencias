import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  constructor(private apiService: ApiService) { }

  getAll(){
    return this.apiService.get('subcategories', null);
  }

  getById(id: String){
    return this.apiService.get('subcategory/'+id, null);
  }

  create(subcategory: any){
    console.log(subcategory);
    return this.apiService.post('subcategory', subcategory);
  }

  delete(id: any){
    return this.apiService.delete('subcategory/' + id, null);
  }

}
