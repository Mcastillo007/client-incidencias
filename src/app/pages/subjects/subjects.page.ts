import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreatesubjectComponent } from 'src/app/components/createsubject/createsubject.component';
import { SubjectService } from 'src/app/services/subject.service';


@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.page.html',
  styleUrls: ['./subjects.page.scss'],
})
export class SubjectsPage implements OnInit {
  subjects: any = [];

  constructor(private subjectService: SubjectService,
              private modalController: ModalController,) { }

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

      async createSubject(){
        let createModal = await this.modalController.create({
          component: CreatesubjectComponent,
        });
        createModal.onDidDismiss().then(res=>{
          this.getSubjects();
        });
        return await createModal.present();
      }
    
      async deleteSubject(id: any){
        this.subjectService.delete(id).then(res=> {
          console.log(res);
          this.getSubjects();
        });
      }
    
      /*async editSubject(category: any){
        let createModal = await this.modalController.create({
          component: UpdatecategoryComponent,
          componentProps: {
            category: category,
          }
        });
        createModal.onDidDismiss().then(res=>{
          this.getCategories();
        });
        return await createModal.present();
      }*/
        
}
