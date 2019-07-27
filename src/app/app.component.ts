import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    this.setMaxHeight();
  }

  @HostListener('window: resize')
  public setMaxHeight() {
    const main = document.querySelector('main');
    main.style.height = `${window.innerHeight}px`;
  }

}
