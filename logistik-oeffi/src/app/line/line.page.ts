import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-line',
  templateUrl: './line.page.html',
  styleUrls: ['./line.page.scss'],
})
export class LinePage implements OnInit {

  sub: any;
  id: any;
  vehicle: any;
  vehicles = {
    cargo: { id: 'cargo', prefix: '', 'image': 'cargo.jpg', 'img': 'cargo.svg'},
    ubahn: { id: 'u', prefix: 'U ','image': 'ubahn.jpg'},
    sbahn: { id: 's', prefix: 'S ', 'image': 'sbahn.jpg'},
    bus: {  id: 'bus', prefix: '', 'image': 'bus.jpg', 'img': 'bus.png'},
  }
  stops = {
    "cargo7": {
      line: "7",
      to: 'Geomatikum',
      journey: [
        { name: 'Wildacker'},
{ name: 'Grenzacker'},
{ name: 'Edeka Grenzacker', virtuell: true, hasLocker: true},
{ name: 'Park Grenzacker', virtuell: true},
{ name: 'Baumacker'},
{ name: 'Dallbregen'},
{ name: 'Furchenacker'},
{ name: 'Pflugacker'},
{ name: 'A Eidelstedt Zentrum'},
{ name: 'Cinemaxx Eidelstedt', virtuell: true},
{ name: 'Eidelstedter Platz'},
{ name: 'Reichsbahnstraße'},
{ name: 'Wördemanns Weg'},
{ name: 'Bab-Auffahrt Stellingen'},
{ name: 'Volksparkstraße'},
{ name: 'Basselweg'},
{ name: 'Langenfelder Damm'},
{ name: 'Högenstraße'},
{ name: 'Sartoriusstraße'},
{ name: 'Apostelkirche'},
{ name: 'U Osterstraße'},
{ name: 'Schulweg'},
{ name: 'Kaiser-Friedrich-Ufer'},
{ name: 'Schlankreye (Dkh)'},
{ name: 'U Schlump'},
{ name: 'Geomatikum'},

      ],
    },
    "u3": {
      journey: [{ name: 'Hauptbahnhof Süd'},
      { name: 'Berliner Tor'},
      { name: 'New Pathway Parent'},
      { name: 'Uhlandstraße'},
      { name: 'Mundsburg'},
      { name: 'Hamburger Straße'},
      { name: 'Dehnhaide'},
      { name: 'Barmbek'},
      { name: 'Habichtstraße'},
      { name: 'Wandsbek-Gartenstadt'},
      { name: 'Saarlandstraße'},
      { name: 'Borgweg (Stadtpark)'},
      { name: 'Sierichstraße'},
      { name: 'Kellinghusenstraße'},
      { name: 'Eppendorfer Baum'},
      { name: 'Hoheluftbrücke'},
      { name: 'Schlump'},
      { name: 'Sternschanze (Messe)'},
      { name: 'Feldstraße (Heiligengeistfeld)'},
      { name: 'St.Pauli'},
      { name: 'Landungsbrücken'},
      { name: 'Baumwall (Elbphilharmonie)'},],
      line: "4",
      to: 'Baumwall (Elbphilharmonie)',

    },
    "bus4": {
      line: "4",
      to: 'U Schlump',
      journey: [
        { name: 'Wildacker'},
{ name: 'Grenzacker'},
{ name: 'Baumacker'},
{ name: 'Dallbregen'},
{ name: 'Furchenacker'},
{ name: 'Pflugacker'},
{ name: 'A Eidelstedt Zentrum'},
{ name: 'Eidelstedter Platz'},
{ name: 'Reichsbahnstraße'},
{ name: 'Wördemanns Weg'},
{ name: 'Bab-Auffahrt Stellingen'},
{ name: 'Volksparkstraße'},
{ name: 'Basselweg'},
{ name: 'Langenfelder Damm'},
{ name: 'Högenstraße'},
{ name: 'Sartoriusstraße'},
{ name: 'Apostelkirche'},
{ name: 'U Osterstraße'},
{ name: 'Schulweg'},
{ name: 'Kaiser-Friedrich-Ufer'},
{ name: 'Schlankreye (Dkh)'},
{ name: 'U Schlump'},

      ],
    },
    "s1" : {
      line: "1",
      to: 'Wedel',
      journey: [
        { name: 'Hamburg Airport (Flughafen)'},
        { name: 'Poppenbüttel'},
        { name: 'Wellingsbüttel'},
        { name: 'Hoheneichen'},
        { name: 'Kornweg (Klein Borstel)'},
        { name: 'Ohlsdorf'},
        { name: 'Rübenkamp (City Nord)'},
        { name: 'Alte Wöhr (Stadtpark)'},
        { name: 'Barmbek'},
        { name: 'Friedrichsberg'},
        { name: 'Wandsbeker Chaussee'},
        { name: 'Hasselbrook'},
        { name: 'Landwehr'},
        { name: 'Berliner Tor'},
        { name: 'Hamburg Hbf'},
        { name: 'Jungfernstieg'},
        { name: 'Stadthausbrücke'},
        { name: 'Landungsbrücken'},
        { name: 'Reeperbahn'},
        { name: 'Königstraße'},
        { name: 'Altona'},
        { name: 'Bahrenfeld'},
        { name: 'Othmarschen'},
        { name: 'Klein Flottbek (Botanischer Garten)'},
        { name: 'Hochkamp'},
        { name: 'Blankenese'},
        { name: 'Iserbrook'},
        { name: 'Sülldorf'},
        { name: 'Rissen'},
        { name: 'Wedel'},
      ]
    }
  }
  
  constructor(private route: ActivatedRoute) {
    // ,time:this.random(60)
    Object.keys(this.stops).forEach(line => {
      let timer = 0;
      this.stops[line].journey.forEach((station, index) => {
        timer +=this.random(5) +1;
        this.stops[line].journey[index]['time'] = timer
        
      });
      
    });
  }
  
  random(max) {
    return Math.floor(Math.random() * max);
  }
  getArray(num){
    return [...Array(num+1).keys()];
}
ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
         this.id = params['id']; 
         this.vehicle = params['vehicle']; 
    });

  }

}
