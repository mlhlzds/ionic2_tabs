import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {MyzpPage1} from "./myzp";
import {SharedModule} from "../../shared/shared.module";
import {Conversion} from "../../pipes/conversion";
import {Page1MyzpPage} from "./page1-myzp/page1-myzp";

@NgModule({
  imports: [IonicModule, SharedModule],
  declarations: [MyzpPage1,Page1MyzpPage,Conversion],
  entryComponents: [MyzpPage1,Page1MyzpPage],
  providers: [],
  exports: [IonicModule]
})
export class Page1Module {
}
