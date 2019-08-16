import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

const goToHttp = 'https://purwabarata2019.uns.ac.id/panerusApp/';
let tipe = '';
let grup = '';

@Component({
  selector: 'app-grup',
  templateUrl: './grup.page.html',
  styleUrls: ['./grup.page.scss'],
})
export class GrupPage implements OnInit {
  dataa: any = [];

  async getData() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    const postData = JSON.stringify({idGroup: grup});

    this.http.post(goToHttp + tipe, postData).subscribe(data => {
      this.dataa = data;
      if (!this.dataa.error) {
        loading.dismiss();
      } else {
        loading.dismiss();
        this.falseData(this.dataa.error.text);
      }
    }, err => {
      loading.dismiss();
      this.falseData(err);
    });
  }

  async falseData(msg) {
    const alert = await this.alertController.create({
      message: msg,
      buttons: ['Ok'],
    });
    await alert.present();
    return;
  }

  constructor(
    public loadingController: LoadingController,
    private http: HttpClient,
    private alertController: AlertController,
    private storage: Storage,
  ) { }

  ngOnInit() {
    tipe = 'getGroup.php';
    this.storage.get('USER_INFO').then(res => {
      grup = res.ID_GROUP;
    });
    this.getData();
  }

}
