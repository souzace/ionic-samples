import { Component } from '@angular/core';
import { BasicPage } from '../action-sheets/basic/page';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public basicPage: BasicPage) {}
  
  openMenu(id: string) {
    this.basicPage.param1 = id;
    this.basicPage.openMenu();
  }
  
}
