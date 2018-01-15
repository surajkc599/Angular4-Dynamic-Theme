import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, this.currentSelectedTheme);
  }

  // tslint:disable-next-line:no-inferrable-types
  currentSelectedTheme: string = 'dark';

  switchTheme(value: string) {
    this.renderer.removeClass(document.body, this.currentSelectedTheme);
    this.currentSelectedTheme = value;
    this.renderer.addClass(document.body, value);
  }
}
