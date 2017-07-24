import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {NativeService} from "../../../providers/NativeService";
import {Test2DemoPage} from "../test2-demo/test2-demo";
import {Test3DemoPage} from "../test3-demo/test3-demo";
/*
 Generated class for the PaginationDemo page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-test1-demo',
  templateUrl: 'test1-demo.html'
})     
export class Test1DemoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeService: NativeService) {
  }

  pagination(){
    console.log("222222");
   // this.navCtrl.push(PaginationDemoPage);
  }
  findPassword(){
  	this.navCtrl.push(Test2DemoPage);
  }
  toRegister(){
  	this.navCtrl.push(Test3DemoPage);
  }
}
