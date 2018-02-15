import { Component, OnInit } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
import { Location } from '@angular/common';
 
import { Router,ActivatedRoute,NavigationEnd  } from '@angular/router';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  // route: string;
  private fragment: string;

  public href: string = "";
  constructor(private router : Router,private route: ActivatedRoute ) {
    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        console.log(tree);
        if (tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) { element.scrollIntoView(true); }
        }
      }
    });

   }
  ngOnInit() {
    new WOW().init();

    this.href = this.router.url;
    console.log(this.router.url);

    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  public imageSources: string[] = [
    './assets/slider/1.png',
    './assets/slider/2.png',
    './assets/slider/3.png'
 ];
 
 public config: ICarouselConfig = {
   verifyBeforeLoad: true,
   log: false,
   
   animation: true,
   animationType: AnimationConfig.SLIDE,
   autoplay: true,
   autoplayDelay: 4000,
   stopAutoplayMinWidth: 768,
  
 };
 


}

 
