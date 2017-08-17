import { Component, ViewChild } from '@angular/core';
import { BasicPage } from '../action-sheets/basic/page';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  @ViewChild(BasicPage) basicPage: BasicPage
  constructor() {
    this.basicPage.openMenu();
  }
  
  
  
}
