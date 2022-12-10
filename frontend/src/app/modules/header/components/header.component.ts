import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  tab: 'main' | 'custom' | 'card' | 'board' = 'main';

  constructor() { }

  ngOnInit(): void {
  }

  changeTab(tab: 'main' | 'custom' | 'card' | 'board'): void {
    console.log(tab);
    this.tab = tab;
  }

}
