import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({

  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})


export class AgendaPage implements OnInit {


  promA: any;
  proma: boolean;

 public setVal(promm: boolean, prom: number) {

	 this.proma = promm;
	 if (prom === 1) {
		 this.line[0].isChecked = this.proma;
	 } else if (prom === 2) {
		 this.line1[0].isChecked = this.proma;
	 } else if (prom === 3) {
		 this.line2[0].isChecked = this.proma;
	 } else if (prom === 4) {
		 this.form[0].isChecked = this.proma;
	 } else if (prom === 5) {
		 this.form[1].isChecked = this.proma;
	 } else if (prom === 6) {
		 this.form1[0].isChecked = this.proma;
	 } else if (prom === 7) {
		 this.form2[0].isChecked = this.proma;
	 } else if (prom === 8) {
		 this.form2[1].isChecked = this.proma;
	 } else if (prom === 9) {
		 this.form2[2].isChecked = this.proma;
	 } else if (prom === 10) {
		 this.form3[0].isChecked = this.proma;
	 } else if (prom === 11) {
		 this.forms[0].isChecked = this.proma;
	 }
 }

  public async get(valuea: string, prom: number) {
    await this.storage.get(valuea).then((val) => {
			  this.setVal(val, prom);
	});


  }
	public line = [
    { val: 'Udah sampai di Solo?', isChecked: false }
  ];

  public line1 = [
    { val: 'Sambara!', isChecked: false }
  ];

  public line2 = [
    { val: 'Sambara lagi!', isChecked: false }
  ];

  public form = [
    { val: 'Upacara Pelantikan', isChecked: false, nomor: 3 },
    { val: 'Kuliah Umum', isChecked: false, nomor: 4 }
  ];

  public forms = [
    { val: 'Kuliah Umum', isChecked: false}
  ];

  public form1 = [
    { val: 'Have fun!', isChecked: false }
  ];

  public form2 = [
    { val: 'Upacara HUT RI', isChecked: false },
    { val: 'Kuliah Umum', isChecked: false },
    { val: 'Motivasi ESQ', isChecked: false }
  ];

  public form3 = [
    { val: 'Student Vaganza', isChecked: false }
  ];


  constructor( private storage: Storage) {
		this.get('USER_AGENDA:${ line }', 1);
		this.get('USER_AGENDA:${ line1 }', 2);
		this.get('USER_AGENDA:${ line2 }', 3);
		this.get('USER_AGENDA:${ form }', 4);
		this.get('USER_AGENDA:${ form11 }', 5);
		this.get('USER_AGENDA:${ form1 }', 6);
		this.get('USER_AGENDA:${ form2 }', 7);
		this.get('USER_AGENDA:${ form21 }', 8);
		this.get('USER_AGENDA:${ form22 }', 9);
		this.get('USER_AGENDA:${ form3 }', 10);
		this.get('USER_AGENDA:${ forms }', 11);
}

  ngOnInit() {
  }


  checkeda(choose : number) {
	  if (choose === 1) {
		  this.storage.set('USER_AGENDA:${ line }', this.line[0].isChecked);
	  } else if (choose === 2) {
		  this.storage.set('USER_AGENDA:${ line1 }', this.line1[0].isChecked);
	  } else if (choose === 3) {
		  this.storage.set('USER_AGENDA:${ line2 }', this.line2[0].isChecked);
	  } else if (choose === 4) {

		  this.storage.set('USER_AGENDA:${ form }', this.form[0].isChecked);
		  console.log('masuk1');
	  } else if (choose === 5) {
		  this.storage.set('USER_AGENDA:${ form11 }', this.form[1].isChecked);
		  console.log('masuk2');
	  } else if (choose === 6) {

		  this.storage.set('USER_AGENDA:${ form1 }', this.form1[0].isChecked);
	  } else if (choose === 7) {

		  this.storage.set('USER_AGENDA:${ form2 }', this.form2[0].isChecked);
	  } else if (choose === 8) {

		  this.storage.set('USER_AGENDA:${ form21 }', this.form2[1].isChecked);
	  } else if (choose === 9) {

		  this.storage.set('USER_AGENDA:${ form22 }', this.form2[2].isChecked);
	  } else if (choose === 10) {

		  this.storage.set('USER_AGENDA:${ form3 }', this.form3[0].isChecked);
	  } else if (choose === 11) {
		  console.log('MASSSOK');
		  this.storage.set('USER_AGENDA:${ forms }', this.forms[0].isChecked);
	  }

  }



}





