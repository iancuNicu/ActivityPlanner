import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

import {ApiConfigService} from './services/api-config.service';
import {FoursquareService} from './services/foursquare.service';

import { HeaderComponent } from './Header/header/header.component';
import { HeaderSearchComponent } from './search-components/header-search/header-search.component';
import { ActivityFeedComponent } from './MainBody/activity-feed/activity-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderSearchComponent,
    ActivityFeedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ ApiConfigService,
                FoursquareService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
