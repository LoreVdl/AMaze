import {Component, EventEmitter, Input, OnInit, Output, Renderer2} from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent implements OnInit {

  @Input() source: string;
  @Input() elementId: string;

  @Output() scroll: EventEmitter<string> = new EventEmitter<string>();

  hamburgerMenuOpen = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  getElementName(id: string): string {
    switch (id) {
      case 'profile':
        return 'OVER ONS';
      case 'projects':
        return 'PROJECTEN';
      case 'shop':
        return 'WEBSHOP';
      case 'contact':
        return 'CONTACT';
    }
  }

  toggleMenu(): void {
    this.hamburgerMenuOpen = !this.hamburgerMenuOpen;

    if (this.hamburgerMenuOpen) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
      this.renderer.removeStyle(document.body, 'overflow');
    }
  }

  getIconUrl(id: string): string {
    if (this.elementId === id) {
      return '../../../assets/images/' + id + '-green.svg';
    } else {
      return '../../../assets/images/' + id + '.svg';
    }
  }

  scrollEvent(id: string): void {
    this.scroll.emit(id);
    this.hamburgerMenuOpen = false;
    this.renderer.removeStyle(document.body, 'overflow');
  }
}
