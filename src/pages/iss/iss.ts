import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IssProvider } from '../../providers/iss/iss';
/**
 * Generated class for the IssPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-iss',
  templateUrl: 'iss.html',
})
export class IssPage {
  issTracker: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private IssProvider: IssProvider) {
  }

  //getting the API to be initalised
  ionViewDidLoad() {
    this.IssProvider.getIss().subscribe((data) => {
      this.issTracker = data.people;
      this.issTracker.splice(10);
      console.log(this.issTracker);

    })

    console.log('ionViewDidLoad IssPage');
  }

}
