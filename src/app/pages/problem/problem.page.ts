import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ProblemService } from 'src/app/services/problem.service';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.page.html',
  styleUrls: ['./problem.page.scss'],
})
export class ProblemPage implements OnInit {
  id: any = {}

  constructor(private problemService: ProblemService,
              private apiService: ApiService) { }

  ngOnInit() {
  }

async getProblem(id: any){
  console.log(id);

  try{
    let idAux: any = await this.problemService.getById(id);
    console.log(idAux);
    }
  catch(ex){
    console.log(ex.error.message);
  }

  }
}