import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProblemService {

  constructor(private apiService: ApiService) { }

  getByUser(id: any){
    console.log(id);
    return this.apiService.get('problems/user/'+id, null);
  }
  
  getAll(){
    return this.apiService.get('problems', null);
  }
  
  getById(id: String){
    return this.apiService.get('problem/'+id, null);
  }

  reply(answer: any){
    return this.apiService.post('answers', answer);
  }
  createProblem(problem: any){
    return this.apiService.post('problem', problem);
  }
  delete(id: any){
    return this.apiService.delete('problem/' + id, null);
  }

  close(id: any){
    return this.apiService.get('problems/close/'+id, null);
  }

  getData(){
    return this.apiService.get('data-problems', null);
  }

  updateAnswer(answer: any){
    return this.apiService.post('answers/'+answer._id, answer);
  }

}


