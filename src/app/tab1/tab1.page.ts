import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Storage } from '@ionic/storage';

const goToHttp = 'https://purwabarata2019.uns.ac.id/panerusApp/';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  refresher = document.getElementById('refresher');
  kabar: any;

  doRefresh(event) {
    setTimeout(() => {
      this.getKabarManual();
      this.storage.get('USER_KABAR').then(res => {
        this.kabar = res;
        event.target.complete();
        return;
      }, err => {
        return;
      });
      event.target.complete();
    }, 3000);
  }

  getKabarManual() {
    const postDataa = JSON.stringify({kabar: 'all'});
    const tipe = 'kabar.php';

    this.http.post(goToHttp + tipe, postDataa).subscribe(dataa => {
      if (dataa) {
        this.storage.set('USER_KABAR', dataa);
      } else {
        return;
      }
    }, err => {
      return;
    });
  }

  async showNote(desk, lnk) {
    let choose: any;
    if (lnk === '#') {
      choose = await this.alertController.create({
        message: desk,
        buttons: [
          {
            text: 'OK',
            handler: data => { this.alertController.dismiss(); }
          },
        ]
      });
    } else {
      choose = await this.alertController.create({
        message: desk,
        buttons: [
          {
            text: 'Kunjungi',
            handler: data => { this.openWebSys(lnk); }
          }
        ]
      });
    }
    await choose.present();
  }

  openWebSys(goto) {
    this.iab.create(goto, '_system');
  }

  constructor(
    private storage: Storage,
    private http: HttpClient,
    private alertController: AlertController,
    private iab: InAppBrowser
    ) {
    this.storage.get('USER_KABAR').then(res => {
      this.kabar = res;
    }, err => {
      return;
    });
  }

}
