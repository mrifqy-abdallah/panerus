import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

const goToHttp = 'https://purwabarata2019.uns.ac.id/panerusApp/';
const tipe = 'absensi2.php';

@Component({
  selector: 'app-presensi',
  templateUrl: './presensi.page.html',
  styleUrls: ['./presensi.page.scss'],
})
export class PresensiPage {
  qrData = null;
  scanResult = 'Tidak ada hasil. Scanning aja kagak.';
  data: any = {};
  apapa = '';

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.qrData = atob(atob(barcodeData.text));
      this.storage.get('USER_INFO').then((res) => {
        const postData = JSON.stringify({QRcode: this.qrData, IDPeserta: res.ID_PESERTA, Group: res.ID_GROUP});
        this.http.post(goToHttp + tipe, postData).subscribe(data => {
          this.data = data;
          if (!this.data.error) {
            this.scanResult = 'Kamu sudah berhasil absensi untuk agenda saat ini. Yang semangat yaa~';
          } else {
            this.scanResult = this.data.error.text;
          }
        });
      });
    }, err => {
      this.scanResult = err;
    });
  }

  constructor(
    private barcodeScanner: BarcodeScanner,
    private http: HttpClient,
    private storage: Storage
  ) { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.scanResult = 'Tidak ada hasil. Scanning aja kagak';
    this.data = null;
  }


}
