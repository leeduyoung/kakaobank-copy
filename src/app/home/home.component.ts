import { Component, OnInit,ViewEncapsulation, HostListener } from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  backgroundColor: boolean = false;;

  constructor() { 

  }

  ngOnInit() {
    $(".slide-container").slick({
      autoplay : false,
      dots: false,
      speed : 300 /* 이미지가 슬라이딩시 걸리는 시간 */,
      infinite: true,
      autoplaySpeed: 3000 /* 이미지가 다른 이미지로 넘어 갈때의 텀 */,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      fade: false,
      centerMode: true,
      centerPadding: '0px'
    });
  }

  ngAfterViewInit() {

  }

  @HostListener('window:scroll', ['$event']) onScroll($event){
    // console.log('$event.srcElement.scrollTop: ',$event.srcElement.scrollingElement.scrollTop);

    if($event.srcElement.scrollingElement.scrollTop > 2550)
      this.backgroundColor = true;
  } 

  goSubmit() {
    console.log('goSubmit()');
  }
}
