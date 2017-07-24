import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FileObj} from "../../../model/FileObj";
import {HttpService} from "../../../providers/HttpService";
import {Response, Http} from "@angular/http";
import {NativeService} from "../../../providers/NativeService";
import {FileService} from "../../../providers/FileService";

@Component({
  selector: 'page-test3-demo',
  templateUrl: 'test3-demo.html'
})
export class Test3DemoPage {
  fileObjList: FileObj[] = [];
  filePaths: FileObj[] = [];
   
  constructor(public navCtrl: NavController,
              private http: Http,
              private httpService: HttpService,
              private fileService: FileService,
              private nativeService: NativeService) {
    //使用Http加载本地json文件,因为HttpService给url默认加了http://ip,加载本地文件不需要http://ip
    this.http.get('./assets/data/fileData.json').map((res: Response) => res.json()).subscribe(res => {
      if (res.success) {
        for (let fileObj of res.data) {
          this.fileObjList.push(<FileObj>{
            'thumbPath': fileObj.base64,
            'origPath': fileObj.base64,
            'base64': fileObj.base64
          });
        }
      }
    });
  }

  details(url){
    this.nativeService.openUrlByBrowser(url);
  }

  uploadMultiByBase64(){
    this.fileService.uploadMultiByBase64(this.fileObjList).subscribe(res => {
      console.log(res);
      if (res && res.data) {
        this.nativeService.showToast('成功上传' + res.data.length + '张图片');
      }
    });
  }

  uploadMultiByFilePath(){
    this.fileService.uploadMultiByFilePath(this.filePaths).subscribe(res => {
      console.log(res);
      if (res && res.data) {
        this.nativeService.showToast('成功上传' + res.data.length + '张图片');
      }
    });
  }

}
