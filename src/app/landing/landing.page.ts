import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  chng(para) {
    this.router.navigate([para], {skipLocationChange: true});
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
