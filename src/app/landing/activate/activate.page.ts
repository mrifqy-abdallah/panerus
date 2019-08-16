import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

const goToHttp = 'https://purwabarata2019.uns.ac.id/panerusApp/';

let tipe = '';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.page.html',
  styleUrls: ['./activate.page.scss'],
})
export class ActivatePage {

  name = '';
  word = '';
  data: any = {};

  async falseData(msg) {
    const alert = await this.alertController.create({
      message: msg,
      buttons: ['Ok'],
    });
    await alert.present();
    return;
  }

  onRegist(form: NgForm) {
    this.name = form.value.namee;
    this.word = form.value.passs;
    tipe = 'regis.php';
    this.registingIn();
  }

  registingIn() {
    if (this.name.length === 0 || this.word.length === 0) {
      const msg = 'Masukkan Nomor Peserta dan Kode Aktivasi';
      this.falseData(msg);
      return;
    }
    const postData = JSON.stringify({code: this.name, actCode: this.word});

    this.http.post(goToHttp + tipe, postData).subscribe(data => {
      this.data = data;
      if (!this.data.error) {
        const nama = this.name;
        this.router.navigate(['landing/create', nama], {skipLocationChange: true});
      } else {
        this.falseData(this.data.error.text);
      }
    });
  }

  chng(para) {
    this.router.navigate([para], {skipLocationChange: true});
  }

  constructor(
    private alertController: AlertController,
    private http: HttpClient,
    private router: Router
  ) { }

}
