import { Component, OnInit } from '@angular/core';

type Tab = 'main' | 'user' | 'card' | 'board';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  tab: Tab = 'main';

  constructor() { }

  ngOnInit(): void {
  }

  changeTab(tab: Tab): void {
    this.tab = tab;
    console.log(this.tab);
  }

}
