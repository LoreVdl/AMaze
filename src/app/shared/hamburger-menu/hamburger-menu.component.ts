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

  toggleMenu(): void {
    this.hamburgerMenuOpen = !this.hamburgerMenuOpen;

    if (this.hamburgerMenuOpen) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
      this.renderer.removeStyle(document.body, 'overflow');
    }
  }

  scrollEvent(id: string): void {
    this.scroll.emit(id);
    this.hamburgerMenuOpen = false;
    this.renderer.removeStyle(document.body, 'overflow');
  }
}
