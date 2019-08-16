import { Component } from '@angular/core';

import { AuthenticationService } from '../services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';

const goToHttp = 'https://purwabarata2019.uns.ac.id/panerusApp/';

let tipe = '';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  define1 = 1;
  define2 = 0;
  define3 = 0;
  define4 = 0;
  user = '';
  pass = '';
  cpass = '';
  name = '';
  word = '';
  data: any = {};

    async getData(fun) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    // tslint:disable-next-line: no-unused-expression
    fun;
    loading.dismiss();
  }

  async falseData(msg) {
    const alert = await this.alertController.create({
      message: msg,
      buttons: ['Ok'],
    });
    await alert.present();
    return;
  }


  login() {
    this.define1 = 0;
    this.define2 = 1;
    this.define3 = 0;
    this.define4 = 0;
  }

  activate() {
    this.define1 = 0;
    this.define2 = 0;
    this.define3 = 1;
  }

  backto() {
    this.define1 = 1;
    this.define2 = 0;
    this.define3 = 0;
    this.define4 = 0;
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
    }
    const postData = JSON.stringify({username: this.user, password: this.pass, code: this.name});
    this.http.post(goToHttp + tipe, postData).subscribe(data => {
      this.data = data;
      if (!this.data.error) {
        this.falseData(this.data.success);
        this.getData(this.define2);
        this.define1 = 0;
        this.define2 = 1;
        this.define3 = 0;
        this.define4 = 0;
      } else {
        this.falseData(this.data.error.text);
      }
    });
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
        this.getData(this.define4);
        this.define1 = 0;
        this.define2 = 0;
        this.define3 = 0;
        this.define4 = 1;
      } else {
        this.falseData(this.data.error.text);
      }
    });
  }

  onLogin(form: NgForm) {
    this.user = form.value.name;
    this.pass = form.value.pass;
    tipe = 'login.php';
    this.logingIn();
  }

  logingIn() {
    if (this.user.length === 0 || this.pass.length === 0) {
      const msg = 'Masukkan Username dan Password!';
      this.falseData(msg);
      return;
    }
    const postData = JSON.stringify({username: this.user, password: this.pass, user: 'peserta'});

    this.http.post(goToHttp + tipe, postData).subscribe(data => {
      this.data = data;
      if (!this.data.error) {
        this.authService.login(this.data);
      } else {
        this.falseData(this.data.error.text);
      }
    });
  }

  constructor(
    private authService: AuthenticationService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private http: HttpClient,
    ) { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.data = {};
    this.define1 = 1;
    this.define2 = 0;
    this.define3 = 0;
    this.define4 = 0;
  }

}
