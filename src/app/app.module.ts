import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LegendeZandhovenComponent } from './legende-zandhoven/legende-zandhoven.component';
import { HomeComponent } from './home/home.component';
import {SharedModule} from './shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ContactService} from './home/contact.service';
import {GoogleAnalyticsService} from './shared/google-analytics.service';
import { BoomgaardComponent } from './boomgaard/boomgaard.component';

@NgModule({
  declarations: [
    AppComponent,
    LegendeZandhovenComponent,
    HomeComponent,
    BoomgaardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    ContactService,
    GoogleAnalyticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
