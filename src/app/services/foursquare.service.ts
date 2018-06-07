import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiConfigService } from './api-config.service';
import {concatMap, map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

import {VenueDetailResponse, VenueResponse} from '../view-model/venueModel';

@Injectable()
export class FoursquareService {
  url = 'https://api.foursquare.com/v2/venues/explore/?';
  detailsUrl = 'https://api.foursquare.com/v2/venues/';

  constructor(private http: HttpClient, private apiConfig: ApiConfigService) { }

  getVenues(city = 'New York' , section = 'food'): Observable<VenueResponse> {
   return this.apiConfig.getConfigKeys().pipe(
      concatMap((res) =>
        this.venueRequest(city, section, res))
    );
  }

  getVenueDetails(id): Observable<VenueDetailResponse> {
    return this.apiConfig.getConfigKeys().pipe(
      concatMap(res => this.venueDetails(id, res))
    );
  }

  venueRequest(city, section, keys) {
    const params: string = [
      `near=${city}`,
      `client_id= ${keys.client_id}`,
      `client_secret=${keys.client_secret}`,
      `section=${section}`,
      `limit=5`,
      `v=20180606`
    ].join('&');
    const queryUrl = `${this.url}${params}`;
    return this.http.get(queryUrl);
  }

  venueDetails(id, keys) {
    const params = [
      `client_id=${keys.client_id}`,
      `client_secret=${keys.client_secret}`,
      `v=20180607`
    ].join('&');
    const queryUrl = this.detailsUrl + id + '?' + params;
    return this.http.get(queryUrl);
  }

}
