import {Component, ViewChild} from '@angular/core';

import {HomePage} from '../home/home';
import {MinePage} from '../mine/mine';
import {Tabs} from "ionic-angular";
import {TestPage} from "../test/test";
import {DemoPage} from "../demo/demo";
import {ChartjsDemoPage} from "../demo/chartjs-demo/chartjs-demo";
import {CustomIconDemoPage} from "../demo/custom-icon-demo/custom-icon-demo";

 
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('mainTabs') tabs: Tabs;
  testRoot: any = ChartjsDemoPage;
  demoRoot: any = DemoPage;
  homeRoot: any = HomePage;
  mineRoot: any = MinePage;   
  sgjd: any = CustomIconDemoPage;   
  
              
  constructor() {

  }
}
