import { Component, OnInit } from '@angular/core';
import {GoogleAnalyticsService} from '../shared/google-analytics.service';
declare var require: any;
const FileSaver = require('file-saver');

@Component({
  selector: 'app-legende-zandhoven',
  templateUrl: './legende-zandhoven.component.html',
  styleUrls: ['./legende-zandhoven.component.scss']
})
export class LegendeZandhovenComponent implements OnInit {

  constructor(private googleAnalyticsService: GoogleAnalyticsService) { }

  ngOnInit() {
  }

  downloadPdf() {
    const pdfUrl = './assets/dagboek.pdf';
    const pdfName = 'de_legende_van_zandhoven.pdf';
    FileSaver.saveAs(pdfUrl, pdfName);
    this.downloadLegendeEvent();
  }

  downloadLegendeEvent() {
    this.googleAnalyticsService
      .eventEmitter('dowload_legende', 'legende', 'download', 'click', 10);
  }

}
