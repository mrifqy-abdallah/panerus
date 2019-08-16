import { Component } from '@angular/core';

import { AuthenticationService } from '../../services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

const goToHttp = 'https://purwabarata2019.uns.ac.id/panerusApp/';
let tipe = '';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  user = '';
  pass = '';
  data: any = {};

  async falseData(msg) {
    const alert = await this.alertController.create({
      message: msg,
      buttons: ['Ok'],
    });
    await alert.present();
    return;
  }

  async getData(fun) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    // tslint:disable-next-line: no-unused-expression
    fun;
    loading.dismiss();
  }

  chng(para) {
    this.router.navigate([para], {skipLocationChange: true});
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
        const masok = this.authService.login(this.data);
        this.getData(masok);
      } else {
        this.falseData(this.data.error.text);
      }
    });
  }

  constructor(
    private authService: AuthenticationService,
    private alertController: AlertController,
    private http: HttpClient,
    private router: Router,
    private loadingController: LoadingController
    ) { }

}
