import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';
import {PaginationDemoPage} from "../pagination-demo/pagination-demo";

import {CustomIconDemoPage} from "../custom-icon-demo/custom-icon-demo";
import {ChartjsDemoPage} from "../chartjs-demo/chartjs-demo";
import {SelectPicDemoPage} from "../select-pic-demo/select-pic-demo";
import {CustomPipeDemo} from "../custom-pipe-demo/custom-pipe-demo";
import {TransitionDemoPage} from "../transition-demo/transition-demo";

@Component({
  selector: 'page-test4-demo',
  templateUrl: 'test4-demo.html'
})
export class Test4DemoPage {

   
  constructor(private navCtrl: NavController) {

  }

  pagination() {
    this.navCtrl.push(PaginationDemoPage);
  }

  customIcon() {
    this.navCtrl.push(CustomIconDemoPage);
  }

  pipes() {
    this.navCtrl.push(CustomPipeDemo);
  }

  chartjs() {
    this.navCtrl.push(ChartjsDemoPage);
  }

  selectPic() {
    this.navCtrl.push(SelectPicDemoPage);
  }

  pageTransition() {
    this.navCtrl.push(TransitionDemoPage);
  }

}
