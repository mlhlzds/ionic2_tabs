import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NativeService} from "../../../providers/NativeService";
import {Test1DemoPage} from "../test1-demo/test1-demo";

/*
  Generated class for the CustomIconDemo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-custom-icon-demo',
  templateUrl: 'custom-icon-demo.html'
})
export class CustomIconDemoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeService: NativeService) {}


  details(url){
    this.nativeService.openUrlByBrowser(url);
  }
  //Test1DemoPage

  toPage1(){
  	this.navCtrl.push(Test1DemoPage);
  }
}
