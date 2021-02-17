import { Component, OnInit } from '@angular/core';
import smoothscroll from 'smoothscroll-polyfill';
import {NavigationItem} from '../shared/navigation/navigation-item.model';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {

  isScrolling = false;
  elementId = 'home';

  navigationItems: Array<NavigationItem> = [
    {
      id: 'home',
      active: true
    },
    {
      id: 'shop',
      active: false
    },
    {
      id: 'aanbod',
      active: false
    },
    {
      id: 'projecten',
      active: false
    },
    {
      id: 'contact',
      active: false
    },
  ];

  scroll(id: string): void {
    this.navigationItems.find(item => item.id === this.elementId).active =  false;

    this.isScrolling = true;
    this.elementId = id;

    this.navigationItems.find(item => item.id === this.elementId).active = true;

    const element = document.getElementById(id) as HTMLElement;
    smoothscroll.polyfill();
    element.scrollIntoView({behavior: 'smooth'});

    setTimeout(() => {
      this.isScrolling = false;
    }, 1000);
  }

}
