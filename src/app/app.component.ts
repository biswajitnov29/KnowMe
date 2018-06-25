import { Component,ElementRef } from '@angular/core';

import { Section } from './section.enum'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public el: ElementRef){
  }
  
}
