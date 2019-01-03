import { Component, OnInit, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-liw-grid',
  templateUrl: './liw-grid.component.html',
  styleUrls: ['./liw-grid.component.scss']
})
export class LiwGridComponent implements OnInit {

  years: number = 90;
  weeks: number = 52;
  arr = Array;

  data1 = [

  ]

  @HostBinding("attr.style")
  get style() {
    return this.sanitizer.bypassSecurityTrustStyle(`--columns: ${this.weeks}; --rows: ${this.years}`);
  }

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    // let root = document.documentElement;
    // root.style.setProperty('--columns', `${this.weeks}`);
    // root.style.setProperty('--rows', `${this.years}`);
  }

}
