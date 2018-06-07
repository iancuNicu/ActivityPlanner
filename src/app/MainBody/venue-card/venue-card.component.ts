import {Component, Input, OnInit} from '@angular/core';
import {VenueModel} from '../../view-model/venueModel';
import {FoursquareService} from '../../services/foursquare.service';

@Component({
  selector: 'app-venue-card',
  templateUrl: './venue-card.component.html',
  styleUrls: ['./venue-card.component.css']
})
export class VenueCardComponent implements OnInit {
  @Input() venueID: VenueModel;

  venue: any;

  constructor(private fSquare: FoursquareService) { }

  ngOnInit() {
    this.fSquare.getVenueDetails(this.venueID).subscribe(res => {
      this.venue = res.response.venue;
      console.log(this.venue);
    });
  }

}
