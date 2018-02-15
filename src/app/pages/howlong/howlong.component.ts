import { Component, OnInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
  selector: 'app-howlong',
  templateUrl: './howlong.component.html',
  styleUrls: ['./howlong.component.css']
})
export class HowlongComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    new WOW().init();
  }

}
