import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NasaProvider } from '../../providers/nasa/nasa';
/**
 * Generated class for the NasaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nasa',
  templateUrl: 'nasa.html',
})
export class NasaPage {
  spaceImage: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private NasaProvider: NasaProvider) {
  }
  //initalsing the API
  ionViewDidLoad() {
    this.NasaProvider.getNasa().subscribe((data) => {
      this.spaceImage = data;
    })

    console.log('ionViewDidLoad NasaPage');
  }

}
