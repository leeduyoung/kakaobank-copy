import { Component } from '@angular/core';
import { NgsRevealModule, NgsRevealConfig } from 'ng-scrollreveal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(ngsRevealConfig: NgsRevealConfig) {
    ngsRevealConfig.delay = 200;
    ngsRevealConfig.duration = 800;
  }
}
