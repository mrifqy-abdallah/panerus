import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tentang',
  templateUrl: './tentang.page.html',
  styleUrls: ['./tentang.page.scss'],
})
export class TentangPage implements OnInit {
	heightTentang: String = '50vw';
	opacityTentang: Number = 1;
	opacityTentang2: Number = 0;
	visibilityTentang: String = 'visible';
	visibilityTentang2: String = 'hidden';
	
	
	height2Tentang: String = '50vw';
	opacity2Tentang: Number = 1;
	opacity2Tentang2: Number = 0;
	visibility2Tentang: String = 'visible';
	visibility2Tentang2: String = 'hidden';
	
	
	height3Tentang: String = '50vw';
	opacity3Tentang: Number = 1;
	opacity3Tentang2: Number = 0;
	visibility3Tentang: String = 'visible';
	visibility3Tentang2: String = 'hidden';
	
	
	height4Tentang: String = '50vw';
	opacity4Tentang: Number = 1;
	opacity4Tentang2: Number = 0;
	visibility4Tentang: String = 'visible';
	visibility4Tentang2: String = 'hidden';
	
	
	height5Tentang: String = '50vw';
	opacity5Tentang: Number = 1;
	opacity5Tentang2: Number = 0;
	visibility5Tentang: String = 'visible';
	visibility5Tentang2: String = 'hidden';
	
	
	
	@ViewChild('content1', {static: false}) content1;
	
	@ViewChild('slides', {static: false}) slider: IonSlides;
	segment = 0;
  
	@ViewChild('con1', {static: false}) con1;
	
	choice: number = 1;
  
  posYCon : number[] = [0,0,0,0,0];
  
  state : boolean = false;
 

  assignVal(){
    for(let i = 0; i < 5; i++){
      this.posYCon[i] = this.con1.nativeElement.getBoundingClientRect().height * i;
    }
    
    
  }

  firstUse(){
    if(this.state === false){
      this.assignVal();
      this.state = true;
    }
  }

  ScrollToPoint(choosein : number){
	this.firstUse();

	this.content1.scrollToPoint(0,this.posYCon[choosein],100);

  }
  
	
  sliderOpts = {
    speed : 2000,
    autoplay : true,
    on: {
      beforeInit() {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        swiper.params = Object.assign(swiper.params, overwriteParams);
        swiper.params = Object.assign(swiper.originalParams, overwriteParams);
      },
      setTranslate() {
        const swiper = this;
        const { slides } = swiper;
        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = swiper.slides.eq(i);
          const offset$$1 = $slideEl[0].swiperSlideOffset;
          let tx = -offset$$1;
          if (!swiper.params.virtualTranslate) tx -= swiper.translate;
          let ty = 0;
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
          }
          const slideOpacity = swiper.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
            : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
          $slideEl
            .css({
              opacity: slideOpacity,
            })
            .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
        }
      },
      setTransition(duration) {
        const swiper = this;
        const { slides, $wrapperEl } = swiper;
        slides.transition(duration);
        if (swiper.params.virtualTranslate && duration !== 0) {
          let eventTriggered = false;
          slides.transitionEnd(() => {
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return;
            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
            for (let i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      },
    }
  }    

  constructor() { }

  ngOnInit() {
  }
  
  
  
  
  changeHeight(){
	  this.heightTentang= '92vh';
	  this.opacityTentang = 0;
	  this.opacityTentang2 = 1;
	  
	  this.visibilityTentang = 'hidden';
	  this.visibilityTentang2 = 'visible';
	  
	  setTimeout(() => {
		this.content1.scrollY = false;
		}, 500);
		
	  
  }
  
  changeHeightReverse(){
	  this.heightTentang= '50vw';
	  this.opacityTentang = 1;
	  this.opacityTentang2 = 0;
	  
	  this.visibilityTentang = 'visible';
	  this.visibilityTentang2 = 'hidden';
	  
	  
	  this.content1.scrollY = true;
  }
  
  
   changeHeight2(){
	  this.height2Tentang= '92vh';
	  this.opacity2Tentang = 0;
	  this.opacity2Tentang2 = 1;
	  
	  this.visibility2Tentang = 'hidden';
	  this.visibility2Tentang2 = 'visible';
	  
	  setTimeout(() => {
		this.content1.scrollY = false;
		}, 500);
		
	  
  }
  
  changeHeightReverse2(){
	  this.height2Tentang= '50vw';
	  this.opacity2Tentang = 1;
	  this.opacity2Tentang2 = 0;
	  
	  this.visibility2Tentang = 'visible';
	  this.visibility2Tentang2 = 'hidden';
	  
	  
	  this.content1.scrollY = true;
  }
  
  
  
  
     changeHeight3(){
	  this.height3Tentang= '92vh';
	  this.opacity3Tentang = 0;
	  this.opacity3Tentang2 = 1;
	  
	  this.visibility3Tentang = 'hidden';
	  this.visibility3Tentang2 = 'visible';
	  
	  setTimeout(() => {
		this.content1.scrollY = false;
		}, 500);
		
	  
  }
  
  changeHeightReverse3(){
	  this.height3Tentang= '50vw';
	  this.opacity3Tentang = 1;
	  this.opacity3Tentang2 = 0;
	  
	  this.visibility3Tentang = 'visible';
	  this.visibility3Tentang2 = 'hidden';
	  
	  
	  this.content1.scrollY = true;
  }
  
  
  
     changeHeight4(){
	  this.height4Tentang= '92vh';
	  this.opacity4Tentang = 0;
	  this.opacity4Tentang2 = 1;
	  
	  this.visibility4Tentang = 'hidden';
	  this.visibility4Tentang2 = 'visible';
	  
	  setTimeout(() => {
		this.content1.scrollY = false;
		}, 500);
		
	  
  }
  
  changeHeightReverse4(){
	  this.height4Tentang= '50vw';
	  this.opacity4Tentang = 1;
	  this.opacity4Tentang2 = 0;
	  
	  this.visibility4Tentang = 'visible';
	  this.visibility4Tentang2 = 'hidden';
	  
	  
	  this.content1.scrollY = true;
  }
  
  
  
     changeHeight5(){
	  this.height5Tentang= '92vh';
	  this.opacity5Tentang = 0;
	  this.opacity5Tentang2 = 1;
	  
	  this.visibility5Tentang = 'hidden';
	  this.visibility5Tentang2 = 'visible';
	  
	  setTimeout(() => {
		this.content1.scrollY = false;
		}, 500);
		
	  
  }
  
  changeHeightReverse5(){
	  this.height5Tentang= '50vw';
	  this.opacity5Tentang = 1;
	  this.opacity5Tentang2 = 0;
	  
	  this.visibility5Tentang = 'visible';
	  this.visibility5Tentang2 = 'hidden';
	  
	  
	  this.content1.scrollY = true;
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



  changeState(pilihan: number) {
    if (pilihan === 1) {
      this.choice = 1;
    } else if (pilihan === 2) {
      this.choice = 2;
    }

  }

  

}
