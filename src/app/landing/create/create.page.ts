import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

const goToHttp = 'https://purwabarata2019.uns.ac.id/panerusApp/';
let tipe = '';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage {

  name = '';
  user = '';
  pass = '';
  cpass = '';
  data: any = {};

  async falseData(msg) {
    const alert = await this.alertController.create({
      message: msg,
      buttons: ['Ok'],
    });
    await alert.present();
    return;
  }

  onCreate(form: NgForm) {
    this.user = form.value.nameee;
    this.pass = form.value.passss;
    this.cpass = form.value.cpassss;
    tipe = 'createUser.php';
    this.creating();
  }

  creating() {
    if (this.user.length === 0 || this.pass.length === 0 || this.cpass.length === 0) {
      const msg = 'Isi semua masukan data yang tersedia!';
      this.falseData(msg);
      return;
    } else if (this.pass !== this.cpass) {
      const msg = 'Input kedua Password tidak sama!';
      this.falseData(msg);
      return;
    } else if (this.user.length < 7 || this.pass.length < 7) {
      const msg = 'Username dan Password minimal terdiri dari 7 karakter';
      this.falseData(msg);
      return;
    } else if (this.user.length > 15 || this.pass.length > 15) {
      const msg = 'Username dan Password maksimal terdiri oleh 15 karakter';
      this.falseData(msg);
      return;
    }
    const postData = JSON.stringify({username: this.user, password: this.pass, code: this.name});
    this.http.post(goToHttp + tipe, postData).subscribe(data => {
      this.data = data;
      if (!this.data.error) {
        this.falseData(this.data.success);
        this.chng('landing/login');
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
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.name = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
