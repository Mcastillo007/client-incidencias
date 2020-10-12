import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { Subject } from '../../models/subject';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.page.html',
  styleUrls: ['./subjects.page.scss'],
})
export class SubjectsPage implements OnInit {
  subjects: any = [];

  constructor(private subjectService: SubjectService) { }

  async  ngOnInit() {
    await this.getSubjects();
  }

  async getSubjects(){
    try{
      let subjectsResponse: any = await this.subjectService.getAll();
        if(null!= subjectsResponse){

          //console.log(problems);
          this.subjects = subjectsResponse.subjects;
          console.log(this.subjects);
          }
        }catch(ex){
          console.log(ex.error.message)
        }
      }
}
