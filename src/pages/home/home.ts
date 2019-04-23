//Imports
import { Component } from '@angular/core';
import { IssProvider } from '../../providers/iss/iss';
import { NasaProvider } from '../../providers/nasa/nasa';
import { MarsProvider } from '../../providers/mars/mars';
import { NavController } from 'ionic-angular';
import { NasaPage } from './../nasa/nasa';
import { IssPage } from './../iss/iss';
import { MarsPage } from './../mars/mars';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  //Page navigation controls
  constructor(public navCtrl: NavController) {
  }
  //to go to Nasa image of the day
  openNasa() {
    this.navCtrl.push(NasaPage);
  }
  //to go to Mars rover Facts and pics

  openMars() {
    this.navCtrl.push(MarsPage);
  }
  //to go to ISS Facts and Info

  openIss() {
    this.navCtrl.push(IssPage);
  }
}