import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-web',
  templateUrl: './web.page.html',
  styleUrls: ['./web.page.scss'],
})
export class WebPage implements OnInit {

  openWeb() {
    this.iab.create('https://pkkmb.uns.ac.id/', '_blank');
  }

  openWebSys() {
    this.iab.create('https://pkkmb.uns.ac.id/', '_system');
  }

  constructor(private iab: InAppBrowser) { }

  ngOnInit() {
    this.openWeb();
  }

}
