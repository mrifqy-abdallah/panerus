import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authState = new BehaviorSubject(false);

  login(userinfo) {
    this.storage.set('USER_INFO', userinfo).then(() => {
      this.router.navigate(['tabs'], {replaceUrl: true});
      this.authState.next(true);
    });
  }

  logout() {
    this.storage.remove('USER_INFO').then(() => {
      this.storage.remove('USER_NEWAGENDA');
      this.storage.remove('USER_KABAR');
      this.storage.clear();
      this.router.navigate(['']);
      this.authState.next(false);
    });
  }

  isAuthenticated() {
    return this.authState.value;
  }

  constructor(
    private router: Router,
    private storage: Storage,
    private platform: Platform,
    public toastController: ToastController
  ) {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }

  ifLoggedIn() {
    this.storage.get('USER_INFO').then((response) => {
      if (response === null) {
        this.router.navigate(['landing'], {replaceUrl: true});
      } else {
        this.authState.next(true);
      }
    });
  }

}
