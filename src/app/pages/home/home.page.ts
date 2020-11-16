import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { NewproblemComponent } from 'src/app/components/newproblem/newproblem.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CategoryService } from 'src/app/services/category.service';
import { SubcategoryService } from 'src/app/services/subcategory.service';
import { SubjectService } from 'src/app/services/subject.service';
import { UserService } from 'src/app/services/user.service';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { BaseChartDirective, Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  problem: any = {};
  categories: any = [];
  subcategories: any = [];
  subjects: any = [];
  user: any;

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'ACTIVOS' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'CERRADOS' },
    { data: [180, 480, 770, 90, 1000, 270, 400], label: 'RAMO', yAxisID: 'y-axis-1' }
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: false,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;



  constructor(
    private authService: AuthService,
    private router: Router,
    private modalController: ModalController,
    private categoryService: CategoryService,
    private subcategoryService: SubcategoryService,
    private subjectService: SubjectService,
    private menuCtrl: MenuController,
    private userService: UserService,
  ) { }

  async ngOnInit() {
    await this.getCategories();
    await this.getSubcategories();
    await this.getSubjects();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  async getCategories() {
    try {
      let categoriesResponse: any = await this.categoryService.getAll();
      if (null != categoriesResponse) {
        this.categories = categoriesResponse.categories;
        console.log(this.categories);
      }
    } catch (ex) {
      console.log(ex.error.message)
    }
  }

  async getSubcategories() {
    try {
      let subcategoriesResponse: any = await this.subcategoryService.getAll();
      if (null != subcategoriesResponse) {

        console.log(this.subcategories);
        this.subcategories = subcategoriesResponse.subcategories;
        console.log(this.subcategories);
      }
    } catch (ex) {
      console.log(ex.error.message)
    }
  }

  async getSubjects(){
    try{
      let subjectsResponse: any = await this.subjectService.getAll();

        if (null != subjectsResponse){

          this.subjects = subjectsResponse.subjects;
          console.log(this.subjects);
          }
        }catch (ex){
          console.log(ex.error.message)
        }
      }


  async newproblem(){
    let createModal = await this.modalController.create({
      component: NewproblemComponent,
      componentProps: {
        categories: this.categories,
        subcategories: this.subcategories,
        subjects: this.subjects,
        user: this.user
      }
    });
    createModal.onDidDismiss().then(res => {
    }); 
    return await createModal.present();
  }

}
