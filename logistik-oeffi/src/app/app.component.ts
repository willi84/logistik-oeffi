import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent{
  isStart = false;
  public appPages = [
    // { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    // { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Start', url: '/start', icon: 'home' },
    { title: 'Timetable', url: '/timetable', icon: 'list' },
    // { titleStarttes', url:start/Favorites', icon: 'heart' },
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor( router: Router) {
    
    // this.isStart = router.isActive('/start', true);
    router.events.subscribe(val => {
      this.isStart = router.isActive('/start', true);
      // this.isStart = val.route.path === 'start';
      // if (location.path() == "") {
      //   this.isHome = true;
      //   this.baseUrl = './';
      // } else {
      //   this.isHome = false;
      //   this.baseUrl = '';
      // }
      // console.log(val)
    });
  }
  
}
