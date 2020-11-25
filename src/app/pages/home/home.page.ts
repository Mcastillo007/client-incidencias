import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController, NavParams } from '@ionic/angular';
import { NewproblemComponent } from 'src/app/components/newproblem/newproblem.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CategoryService } from 'src/app/services/category.service';
import { SubcategoryService } from 'src/app/services/subcategory.service';
import { SubjectService } from 'src/app/services/subject.service';
import { UserService } from 'src/app/services/user.service';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ProblemService } from 'src/app/services/problem.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  problem: any = {};
  categories: any = [];
  dataProblems: any = [];
  dataChart: any = [];
  dataChart1: any = [];
  subcategories: any = [];
  subjects: any = [];
  user: any;

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2020'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [ChartDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [0], label: 'Director de Escuela' },
    { data: [0], label: 'Secretaria' }
  ];

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [['INCIDENCIAS', 'CERRADAS'], ['INCIDENCIAS', 'ACTIVAS']];
  public pieChartData: number[] = [300, 500];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [ChartDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(0,255,0,0.3)','rgba(255,0,0,0.3)'],
    },
  ];
  



  constructor(
    private authService: AuthService,
    private router: Router,
    private modalController: ModalController,
    private categoryService: CategoryService,
    private subcategoryService: SubcategoryService,
    private subjectService: SubjectService,
    private menuCtrl: MenuController,
    private userService: UserService,
    private problemService: ProblemService
  ) {}

  async ngOnInit() {
    await this.getCategories();
    await this.getSubcategories();
    await this.getSubjects();
    await this.getData();
  }

    // events
    public chartClicked2({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
    public chartHovered2({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
    changeLabels(): void {
      const words = ['hen', 'variable', 'embryo', 'instal', 'pleasant', 'physical', 'bomber', 'army', 'add', 'film',
        'conductor', 'comfortable', 'flourish', 'establish', 'circumstance', 'chimney', 'crack', 'hall', 'energy',
        'treat', 'window', 'shareholder', 'division', 'disk', 'temptation', 'chord', 'left', 'hospital', 'beef',
        'patrol', 'satisfied', 'academy', 'acceptance', 'ivory', 'aquarium', 'building', 'store', 'replace', 'language',
        'redeem', 'honest', 'intention', 'silk', 'opera', 'sleep', 'innocent', 'ignore', 'suite', 'applaud', 'funny'];
      const randomWord = () => words[Math.trunc(Math.random() * words.length)];
      this.pieChartLabels = Array.apply(null, { length: 3 }).map(_ => randomWord());
    }
  
    addSlice(): void {
      this.pieChartLabels.push(['Line 1', 'Line 2', 'Line 3']);
      this.pieChartData.push(400);
      this.pieChartColors[0].backgroundColor.push('rgba(196,79,244,0.3)');
    }
  
    removeSlice(): void {
      this.pieChartLabels.pop();
      this.pieChartData.pop();
      this.pieChartColors[0].backgroundColor.pop();
    }
  
    changeLegendPosition(): void {
      this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
    }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData[1].data;
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

  async getData(){
    let labels:any = [];
    let labels1: any = [];
    let data: any = await this.problemService.getData();
    console.log(data.response);
    for(var i in data.response){
      if ( !(i == 'director' || i =='secretaria')  ){
        this.dataChart.push( data.response [i]);
        labels.push([i]);
        
      }
      else{
        this.dataChart1.push( {data: [data.response [i]], label: [i]  });
        labels1.push();
      }
      
    }
    this.pieChartLabels = labels;
    this.barChartLabels = labels1;
    this.barChartData = this.dataChart1;
    this.pieChartData = this.dataChart;
    console.log(this.dataChart);

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
