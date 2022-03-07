import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() clickedMenuSection = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  handleClicked(menuType: string) {
    this.clickedMenuSection.emit(menuType);
  }
}
