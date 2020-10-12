import { Component, OnInit } from '@angular/core';
import { ProblemService } from 'src/app/services/problem.service';
import { Problem } from './../../models/problem';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.page.html',
  styleUrls: ['./problems.page.scss'],
})
export class ProblemsPage implements OnInit {
  problems: any = [];

  constructor(private problemService: ProblemService) { }

  async  ngOnInit() {
    await this.getProblems();
  }

  async getProblems(){
    try{
      let problemsResponse: any = await this.problemService.getAll();
        if(null!= problemsResponse){

          //console.log(problems);
          this.problems = problemsResponse.problems;
          console.log(this.problems);
          }
        }catch(ex){
          console.log(ex.error.message);
        }
      }
}
