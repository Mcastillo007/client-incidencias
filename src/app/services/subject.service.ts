import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private apiService: ApiService) { }

  getAll(){
    return this.apiService.get('subjects', null);
  }

  getById(id: String){
    return this.apiService.get('subject/'+id, null);
  }


}