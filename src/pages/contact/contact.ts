import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page3Page } from '../page3/page3';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
page3 = Page3Page;
  constructor(public navCtrl: NavController) {

  }
goToPage3() {
    this.navCtrl.push(this.page3); 
    
  }
}
