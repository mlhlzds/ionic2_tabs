import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {NativeService} from "../../../providers/NativeService";

/*
 Generated class for the PaginationDemo page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page1-myzp-demo',
  templateUrl: 'page1-myzp.html'
})
export class Page1MyzpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeService: NativeService) {
  }


  //打开新页面
  details(url){
    this.nativeService.openUrlByBrowser(url);
  }


  //分页
  doSearch(pageNum) {
    console.log(pageNum);
  }

  pagination(){
    console.log("222222");
   // this.navCtrl.push(PaginationDemoPage);
  }
}
