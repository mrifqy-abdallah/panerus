import { Component } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-aduan',
  templateUrl: './aduan.page.html',
  styleUrls: ['./aduan.page.scss'],
})
export class AduanPage {

  isiEmail: string;
  isiEmail2: string;
  subject: string;

  define1 = 1;
  define2 = 0;
  namae = '';
  ide = '';
  prodie = '';
  fakultase = '';
  user = '';

  model = '';
  deviceID = '';
  deviceVersion = '';

  warn = '<br> -------------- Jangan Dihapus --------------';
  // tslint:disable-next-line: max-line-length
  warn2 = '<br><br> Informasi di atas diperlukan untuk memproses laporan anda, harap untuk tidak mengubah ataupun menghapus informasi di atas untuk kelancaran bersama';

  platformStr: string;

  send() {
    this.isiEmail2 =  this.isiEmail + '<br>' +
                      this.namae + this.user + this.ide + this.prodie +
                      this.fakultase + this.warn + this.platformStr +
                      this.model + this.deviceVersion + this.warn2;

    const email = {
      to: 'purwabrata@gmail.com',
      subject: this.subject,
      body: this.isiEmail2,
      isHtml: true
    };
    this.emailComposer.open(email);
  }

  constructor(
    private emailComposer: EmailComposer,
    private device: Device,
    private storage: Storage,
  ) {
    this.storage.get('USER_INFO').then(res => {
      this.namae = '<br>' + 'Nama : ' + res.NAMA_PESERTA;
      this.user = '<br>' + 'ID Peserta : ' + res.ID_PESERTA;
      this.prodie = '<br>' + 'Prodi : ' + res.PRODI_PESERTA;
      this.fakultase = '<br>' + 'Fakultas : ' + res.FAKULTAS_PESERTA;
    });
    this.platformStr = '<br>' + 'Platform : ' + this.device.platform + ', ' + this.device.version;
    this.model = '<br>' + 'Model : ' + this.device.model;
    this.deviceVersion = '<br>' + 'Device Serial : ' + this.device.serial;
  }

}
