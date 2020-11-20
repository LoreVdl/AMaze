import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {GoogleAnalyticsService} from '../../shared/google-analytics.service';

@Component({
  selector: 'app-gouden-dief-twenty',
  templateUrl: './gouden-dief-twenty.component.html',
  styleUrls: ['./gouden-dief-twenty.component.scss']
})
export class GoudenDiefTwentyComponent {

  constructor(private router: Router,
              private googleAnalyticsService: GoogleAnalyticsService) {}

  naviagte(): void {
    this.goToWebsiteEvent();
    this.router.navigate(['degoudendief/pageTwentyOne']);
  }

  goToWebsiteEvent() {
    this.googleAnalyticsService
      .eventEmitter('go_to_last_page', 'gouden_dief', 'navigate', 'click', 10);
  }

}
