import { Component, OnInit } from '@angular/core';

import {FoursquareService} from '../../services/foursquare.service';
import {ApiConfigService} from '../../services/api-config.service';

@Component({
  selector: 'app-activity-feed',
  templateUrl: './activity-feed.component.html',
  styleUrls: ['./activity-feed.component.css']
})
export class ActivityFeedComponent implements OnInit {
  venues: any ;

  constructor(private fSquare: FoursquareService) { }

  ngOnInit() {
    this.fSquare.getVenues().subscribe(res => {
      this.venues = res.response.groups[0].items;
      console.log(this.venues);
    });
  }

}
