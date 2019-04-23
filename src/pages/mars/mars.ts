import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarsProvider } from '../../providers/mars/mars';
/**
 * Generated class for the MarsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mars',
  templateUrl: 'mars.html',
})
export class MarsPage {
  marsImage: object[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private MarsProvider: MarsProvider) {
  }
  //initalising the API for use
  ionViewDidLoad() {
    this.MarsProvider.getMars().subscribe((data) => {
      this.marsImage = data.photos;
      this.marsImage.splice(3);
      console.log(this.marsImage);
    })

    console.log('ionViewDidLoad MarsPage');
  }

}
