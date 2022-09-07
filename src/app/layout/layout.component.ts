import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  constructor() {}

  isMobileMenu?: boolean = false;

  ngOnInit(): void {}

  collapseMenu(isVisible: boolean) {
    this.isMobileMenu = isVisible;
  }
}
