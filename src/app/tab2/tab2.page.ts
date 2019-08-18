import { Component, ViewChild } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FCM } from '@ionic-native/fcm/ngx';
import { Storage } from '@ionic/storage';
import { IonSlides } from '@ionic/angular';

const goToHttp = 'https://purwabarata2019.uns.ac.id/panerusApp/';
let tipe = '';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild('content', {static: false}) private content: any;
  @ViewChild(IonSlides, {static: false}) slides: IonSlides;

  user = '';
  img: any;
  newAgenda: any;
  ads: any;

  sliderConf = {
    spaceBetween: -22,
    centeredSlides: true,
    slidesPreview: 1.6,
    loop: true,
    autoplay: true,
    updateOnImageReady: true,
    preventInteractionOnTransition: true,
  };

  menu = [
    [
      { title2: 'Tentang PKKMB', route: 'tab2/tentang', type: 'btn', custom: 'assets/icon/custom/pkkmb-1.svg'}
    ],
    [
      { name: 'book', title: 'Panduan', route: 'tab2/panduan', type: 'btn' },
      { name: 'globe', title: 'Website', route: 'tab2/web', type: 'btn' }
    ],
    [
      { name: 'clipboard', title2: 'Presensi', route: 'tab2/presensi', type: 'btn' }
    ],
    [
      { name: 'people', title: 'Grup', route: 'tab2/grup', type: 'btn' },
      { name: 'bookmarks', title: 'Agenda', route: 'tab2/agenda', type: 'btn' },
      // tslint:disable-next-line: max-line-length
      { name: 'pin', title: 'Lokasi', route: 'https://www.google.com/maps/place/Universitas+Sebelas+Maret,+Jl.+Ir+Sutami+No.36+A,+Pucangsawit,+Kec.+Jebres,+Kota+Surakarta,+Jawa+Tengah+57126/@-7.5596031,110.8565448,17z/data=!4m2!3m1!1s0x2e7a14234667a3fd:0xbda63b32997616ad', type: 'lnk' }
    ]
  ];

  swiped(event) {
    this.sliderConf.autoplay = true;
    this.sliderConf.loop = true;
    this.slides.startAutoplay();
  }

  getKabar() {
    const postData = JSON.stringify({kabar: 'all'});
    tipe = 'kabar.php';

    this.http.post(goToHttp + tipe, postData).subscribe(data => {
      if (data) {
        const kabar = data;
        this.storage.set('USER_KABAR', kabar);
      } else {
        return;
      }
    }, err => {
      return;
    });
  }

  getNewestAgenda() {
    const postDataa = JSON.stringify({agenda0: '0', agenda1: '1'});
    tipe = 'newestAgenda.php';

    this.http.post(goToHttp + tipe, postDataa).subscribe(dataa => {
      if (dataa) {
        const agenda = dataa;
        this.storage.set('USER_NEWAGENDA', agenda);
      } else {
        return;
      }
    }, err => {
      return;
    });
  }

  getAds() {
    const postDataa = JSON.stringify({ads: 'all'});
    tipe = 'iklan.php';

    this.http.post(goToHttp + tipe, postDataa).subscribe(resp => {
      if (resp) {
        this.ads = resp;
      } else {
        return;
      }
    }, err => {
      return;
    });
  }

  next(para) {
    this.authenticationService.isAuthenticated();
    this.router.navigate([para]);
  }

  fire() {
    this.fcm.getToken();

    this.fcm.onTokenRefresh().subscribe();

    this.fcm.onNotification().subscribe(data => {
      if (data.wasTapped) {
        this.router.navigate([data.landing_page]);
      } else {
        this.router.navigate([data.landing_page]);
      }
    });
  }

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private storage: Storage,
    private http: HttpClient,
    private fcm: FCM
    ) {
      this.getAds();
      this.getNewestAgenda();
      this.storage.get('USER_NEWAGENDA').then(res => {
        this.newAgenda = res;
      }, err => { });
    }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
  }

  ionViewWillEnter() {
    this.storage.get('USER_INFO').then(res => {
      this.user = res.UNAME;
      this.img = res.FOTO;
    });
    this.content.scrollToTop(300);
    this.swiped(null);
  }

  ionViewDidEnter() {
    this.fire();
    this.getKabar();
  }

  ionViewDidLeave() {
    this.content.scrollToTop(300);
    this.swiped(null);
  }

}
