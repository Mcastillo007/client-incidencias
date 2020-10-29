import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { ProblemService } from 'src/app/services/problem.service';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.page.html',
  styleUrls: ['./problem.page.scss'],
})
export class ProblemPage implements OnInit {
  id: any = {};
  problem: any;
  answer: any ={};

  constructor(private problemService: ProblemService,
              private apiService: ApiService,
              private navParams: NavParams) {
               
                this.problem = navParams.get('problem');
               }

  ngOnInit() {
  }

 async reply(answer: any){
   answer.problem = this.problem._id;
   console.log( JSON.parse(localStorage.getItem('user')));
   answer.user = JSON.parse(localStorage.getItem('user')).sub;
    await this.problemService.reply(answer);
    await this.getProblem();
    this.answer = {};
 }
 async getProblem(){
   let problemAux: any = await this.problemService.getById(this.problem._id);
  //this.problem = await this.problemService.getById(this.problem._id);
  this.problem = problemAux.problem;
 }
}