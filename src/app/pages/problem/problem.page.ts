import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { ProblemService } from 'src/app/services/problem.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-problem',
  templateUrl: './problem.page.html',
  styleUrls: ['./problem.page.scss'],
})
export class ProblemPage implements OnInit {
  id: any = {};
  problem: any;
  answer: any = {};

  constructor(private problemService: ProblemService,
    private apiService: ApiService,
    private navParams: NavParams,
    private storage: AngularFireStorage) {

    this.problem = navParams.get('problem');
  }

  ngOnInit() {
  }

  async closeIncidencia() {
    this.problemService.close(this.problem._id);
    await this.getProblem();
  }

  async reply(answer: any) {
    answer.problem = this.problem._id;
    console.log(JSON.parse(localStorage.getItem('user')));
    answer.user = JSON.parse(localStorage.getItem('user')).sub;
    await this.problemService.reply(answer);
    await this.getProblem();
    this.answer = {};
  }
  async getProblem() {
    let problemAux: any = await this.problemService.getById(this.problem._id);
    //this.problem = await this.problemService.getById(this.problem._id);
    this.problem = problemAux.problem;
  }

  async uploadFile() {

  }

  public files: NgxFileDropEntry[] = [];

  /*public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {


          const filePath = droppedFile.relativePath;
          const ref = this.storage.ref(filePath);
          const task = ref.put(file);
          // observe percentage changes
         
          // get notified when the download URL is available
          task.snapshotChanges().pipe(
            finalize(() => {

            }))
          ).subscribe()


        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }*/
}