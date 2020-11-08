import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { CreatesubjectComponent } from 'src/app/components/createsubject/createsubject.component';
import { UpdatesubjectComponent } from 'src/app/components/updatesubject/updatesubject.component';
import { SubjectService } from 'src/app/services/subject.service';


@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.page.html',
  styleUrls: ['./subjects.page.scss'],
})
export class SubjectsPage implements OnInit {
  subjects: any = [];
  title: any;
  constructor(private subjectService: SubjectService,
              private modalController: ModalController,
              private alertCtrl: AlertController,
              ) { }

  async  ngOnInit() {
    await this.getSubjects();
  }

  async showConfirmAlert(id: any) {
    let alert = this.alertCtrl.create({
      message: '¿Estas seguro de borrar este ramo?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.subjectService.delete(id).then(res => {
              console.log(res);
              this.getSubjects();
            });
            console.log('Buy clicked');
          }
        }
      ]
    });
    (await alert).present();
  }
  async getSubjects(){
    try{
      let subjectsResponse: any = await this.subjectService.getAll();
        // tslint:disable-next-line: align
        if (null != subjectsResponse){

          //console.log(problems);
          this.subjects = subjectsResponse.subjects;
          console.log(this.subjects);
          }
        }catch (ex){
          console.log(ex.error.message)
        }
      }

      async createSubject(){
        let createModal = await this.modalController.create({
          component: CreatesubjectComponent,
        });
        createModal.onDidDismiss().then(res => {
          this.getSubjects();
        });
        return await createModal.present();
      }

      async deleteSubject(id: any){
        this.subjectService.delete(id).then(res => {
          console.log(res);
          this.getSubjects();
        });
      }

      async editSubject(subject: any){
        let createModal = await this.modalController.create({
          component: UpdatesubjectComponent,
          componentProps: {
            subject: subject,
          }
        });
        createModal.onDidDismiss().then(res => {
          this.getSubjects();
        });
        return await createModal.present();
      }

}
