import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { ProblemService } from 'src/app/services/problem.service';
import { ProblemPage } from '../problem/problem.page';
import { Problem } from './../../models/problem';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.page.html',
  styleUrls: ['./problems.page.scss'],
})
export class ProblemsPage implements OnInit {
  problems: any = [];

  constructor(private problemService: ProblemService,
              private modalController: ModalController,
              private apiService: ApiService) { }

  async ngOnInit() {
    await this.getProblems();
  }

  async getProblems() {
    try {
      let problemsResponse: any = await this.problemService.getAll();
      if (null != problemsResponse) {

        //console.log(problems);
        this.problems = problemsResponse.problems;
        console.log(this.problems);
      }
    } catch (ex) {
      console.log(ex.error.message);
    }
  }

  async editProblem(problem: any) {
    let createModal = await this.modalController.create({
      component: ProblemPage,
      componentProps: {
        problem: problem,
      }
    });
    createModal.onDidDismiss().then(res => {
      this.getProblems();
    });
    return await createModal.present();
  }
}
