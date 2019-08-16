import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-panduan',
  templateUrl: './panduan.page.html',
  styleUrls: ['./panduan.page.scss'],
})




export class PanduanPage implements OnInit {
  posY : any = 0;
  entity : any;
  posYMaba : number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  posYKambing : number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  state : boolean = false;
  

  @ViewChild('content', {static: false}) content;
  @ViewChild('content2', {static: false}) content2;
  @ViewChild('maba1', {static: false}) maba1;
  
  
  pdmPos : any[] = [this.posYMaba, this.posYKambing];

  tinggi : any = 0;


  assignVal(){
    for(let i = 0; i < 60; i++){
      this.posYMaba[i] = this.maba1.nativeElement.getBoundingClientRect().height * i;
    }
    
    
  }

  firstUse(){
    if(this.state === false){
      this.assignVal();
      this.pdmPos = [this.posYMaba, this.posYKambing];
      this.state = true;
    }
  }

  ScrollToPoint(choosein : number, chooseent : number){
    choosein = choosein - 1;
	
	this.content.scrollToPoint(0,this.pdmPos[chooseent][choosein],100);

  }
  


  @ViewChild('slides', {static: false}) slider: IonSlides;
  segment = 0;
  
  

  choice: number = 1;
  menua: any;

  constructor(private menu: MenuController) { 
    this.menua = menu;
	
    
  }
  
  ngAfterViewInit() {
    this.slider.lockSwipes(true);
  }

  async segmentChanged() {
	this.slider.lockSwipes(false);
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
	this.slider.lockSwipes(true);
	if(this.segment == 0){
		this.choice = 1;
	}else{
		this.choice = 2;
	}
  }

  ngOnInit() {
  }

  changeState(pilihan: number) {
    if (pilihan === 1) {
      this.choice = 1;
    } else if (pilihan === 2) {
      this.choice = 2;
    }

  }

  toggleMenu() {
    this.menua.toggle('right');
  }

  

}
