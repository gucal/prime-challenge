import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output() collapseMenuClick = new EventEmitter<any>();

  collapseClick() {
    this.collapseMenuClick.emit();
  }
}
