import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.page.html',
  styleUrls: ['./timetable.page.scss'],
})
export class TimetablePage implements OnInit {


  vehicles = {
    cargo: { prefix: '', 'image': 'cargo.svg'},
    ubahn: { prefix: 'U ',},
    sbahn: { prefix: 'S ', },
    bus: { prefix: '', 'image': 'bus.png'},
  }
  capacity = [
    { text: 'niedrig', value: 'low', },
    { text: 'mittel', value: 'medium', },
    { text: 'hoch', value: 'high', },
  ]
  auslastung = ['niedrig', 'mittel', 'hoch']
  rides = [
    { type: 'cargo', line: '7', target: 'Geomatikum', capacity: this.random(3),time:this.random(8)},
    { type: 'ubahn', line: '3', target: 'Baumwall',  capacity: this.random(3),time:this.random(8)},
    { type: 'sbahn', line: '1', target: 'Wedel',  capacity: this.random(3),time:this.random(8)},
    {type: 'bus', line: '4', target: 'U Schlump',  capacity: this.random(3),time:this.random(8)},
  ]
  constructor() { }
  getArray(num){
    return [...Array(num+1).keys()];
  }
  random(max) {
    return Math.floor(Math.random() * max);
  }

  ngOnInit() {
  }

}
