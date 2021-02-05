import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactService} from './contact.service';
import {ViewState} from './viewState.enum';
import smoothscroll from 'smoothscroll-polyfill';
import {Router} from '@angular/router';
import {GoogleAnalyticsService} from "../shared/google-analytics.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  readonly ViewState = ViewState;

  width: number;
  projects = [
    {
      name: 'Next Escape',
      imageUrl: '../../assets/images/nextEscapeButton.svg',
      styling: '',
      url: '/home'
    },
    {
      name: 'De legende van Zandhoven',
      imageUrl: '../../assets/images/dlvzButton.svg',
      styling: '',
      url: '/delegendevanzandhoven'
    },
    {
      name: 'Farm fun',
      imageUrl: '../../assets/images/farmfunButton.svg',
      styling: '',
      url: '/home'
    },
    {
      name: 'De gouden dief',
      imageUrl: '../../assets/images/goudenDiefButton.svg',
      styling: '',
      url: '/home'
    },
    {
      name: 'More to come',
      imageUrl: '../../assets/images/moreToComeButton.svg',
      styling: '',
    }
    ];

  formData: FormGroup;
  elementId = 'home';

  homeOffset: number = null;
  profileOffset: number = null;
  projectOffset: number = null;
  aanbodOffset: number = null;
  shopOffset: number = null;
  contactOffset: number = null;
  isScrolling = false;
  index = 1;
  showBreak = false;
  showErrorShop = false;

  @ViewChild('home', { static: true }) homeElement: ElementRef;
  @ViewChild('profile', { static: true }) profileElement: ElementRef;
  @ViewChild('project', { static: true }) projectElement: ElementRef;
  @ViewChild('aanbod', { static: true }) aanbodElement: ElementRef;
  @ViewChild('shop', { static: true }) shopElement: ElementRef;
  @ViewChild('contact', { static: true }) contactElement: ElementRef;

  constructor(private formbuilder: FormBuilder,
              public contactService: ContactService,
              private googleAnalyticsService: GoogleAnalyticsService) {

  }

  ngOnInit(): void {
    this.width = window.innerWidth;
    this.formData = this.formbuilder.group({
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      comment: new FormControl('', [Validators.required])
    });

    this.showBreak = (this.width > 900 && this.width < 1024);

    for (const project of this.projects) {
      if (this.width >= 901) {
        let variabele;
        if (this.index >= 4) {
          this.index = 1;
        }

        if (this.index === 1) {
          variabele = (this.index * 4);
        } else if (this.index === 2) {
          variabele = (this.index * 5);
        } else {
          variabele = ((this.index * 5) + 1);
        }
        const variabeleString = variabele.toString();
        project.styling = variabeleString + '/ span 5';
        this.index++;
      }
    }
  }

  toggleErrorShop(): void {
    this.showErrorShop = true;
  }

  ngAfterViewInit() {
    this.homeOffset = this.homeElement.nativeElement.offsetTop;
    this.profileOffset = this.profileElement.nativeElement.offsetTop;
    this.projectOffset = this.projectElement.nativeElement.offsetTop;
    this.aanbodOffset = this.aanbodElement.nativeElement.offsetTop;
    this.shopOffset = this.shopElement.nativeElement.offsetTop;
    this.contactOffset = this.contactElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', [])
  checkScroll(): void {
    if (!this.isScrolling) {
      if (window.pageYOffset >= (this.homeOffset / 2) && window.pageYOffset < (this.profileOffset / 2)) {
        this.elementId = 'home';
      } else if (window.pageYOffset >= (this.profileOffset / 2) && window.pageYOffset < (this.projectOffset / 1.2)) {
        this.elementId = 'profile';
      } else if (window.pageYOffset >= (this.projectOffset / 2) && window.pageYOffset < (this.aanbodOffset / 1.2)) {
        this.elementId = 'projects';
      } else if (window.pageYOffset >= (this.aanbodOffset / 2) && window.pageYOffset < (this.shopOffset / 1.2)) {
        this.elementId = 'aanbod';
      } else if (window.pageYOffset >= (this.shopOffset / 2) && window.pageYOffset < (this.contactOffset / 1.2)) {
        this.elementId = 'shop';
      } else if (window.pageYOffset >= (this.contactOffset / 2)) {
        this.elementId = 'contact';
      } else {
        this.elementId = '';
      }
    }
  }

  scroll(id: string): void {
    this.isScrolling = true;
    this.elementId = id;
    const element = document.getElementById(id) as HTMLElement;
    smoothscroll.polyfill();
    element.scrollIntoView({behavior: 'smooth'});

    setTimeout(() => {
      this.isScrolling = false;
    }, 1000);
  }

  onSubmit(formData): void {
    this.contactService.postMessage(formData);
    this.formData.reset();
  }

  getIconUrl(id: string): string {
    return '../../../assets/images/' + id + '.svg';
  }

  goToWebsiteEvent() {
    this.googleAnalyticsService
      .eventEmitter('go_to_webshop', 'shop', 'navigate', 'click', 10);
  }
}
