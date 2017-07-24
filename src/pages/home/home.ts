import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Page1Page } from '../page1/page1';
import { Page2Page } from '../page2/page2';
import { Page3Page } from '../page3/page3';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	page1 = Page1Page;
	page2 = Page2Page;
	page3 = Page3Page;

  constructor(public navCtrl: NavController) {
console.log("construct 0 home"); 
  }
  ngOnInit() { console.log("ngOnInit 0 home"); }  
   ionViewWillEnter() { console.log("ionViewWillEnter 1 home"); }  
   ionViewDidEnter() { console.log("ionViewDidEnter 2 home"); }  
   ionViewWillLeave() { console.log("ionViewWillLeave l1 home"); }  
   ionViewDidLeave() { console.log("ionViewDidLeave l2 home"); }  
   ionViewWillUnload() { console.log("ionViewWillUnload l3 home"); }  
   ionViewCanEnter() { console.log("ionViewCanEnter 3 home"); }  
   ionViewCanLeave() { console.log("ionViewCanLeave l4  home"); }  

  ionViewDidLoad() {
     console.log("ionViewDidLoad 4 home");
	 }

}
