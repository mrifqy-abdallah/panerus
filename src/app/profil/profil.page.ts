import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  namae = '';
  ide = '';
  prodie = '';
  fakultase = '';
  user = '';
  img: any;


  constructor(
    private storage: Storage,
    ) {
      this.storage.get('USER_INFO').then(res => {
        this.namae = res.NAMA_PESERTA;
        this.user = res.UNAME;
        this.ide = res.NIM_PESERTA;
        this.prodie = res.PRODI_PESERTA;
        this.fakultase = res.FAKULTAS_PESERTA;
        this.img = res.FOTO;
      });
    }

  ngOnInit() {
  }

}
