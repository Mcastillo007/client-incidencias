import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProblemService {

  constructor(private apiService: ApiService) { }

  getAll(){
    return this.apiService.get('problems', null);
  }
  
  getById(id: String){
    return this.apiService.get('problem/'+id, null);
  }

  reply(answer: any){
    return this.apiService.post('answers', answer);
  }
  createProblem(){
    return this.apiService.post('problem', null);
  }

}


