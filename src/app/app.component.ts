import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public isAdmin: false;
  public isSecretary: false;
  public user: any;
  public appPages = [
    {
      title: 'HOME',
      url: '/home',
      icon: 'home',
      isAdmin: false,
    },
    {
      title: 'INCIDENCIAS',
      url: '/problems',
      icon: 'attach',
      isAdmin: false
    },
    {
      title: 'SUBCATEGORIAS',
      url: '/subcategories',
      icon: 'file-tray',
      isAdmin: true
    },
    {
      title: 'RAMOS',
      url: '/subjects',
      icon: 'copy',
      isAdmin: true
    },
    {
      title: 'USUARIOS',
      url: '/user',
      icon: 'people',
      isAdmin: true
    },
    {
      title: 'CATEGORIAS',
      url: '/categories',
      icon: 'albums',
      isAdmin: true
    }

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private events: EventsService
  ) {
    this.initializeApp();
    this.user = JSON.parse(localStorage.getItem('user'));
    this.events.getObservable().subscribe((data) => {
      this.user = data;
     
      });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  logout()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
    
  }
}
