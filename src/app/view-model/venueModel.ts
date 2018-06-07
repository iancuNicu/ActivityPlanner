
export interface VenueModel {
  categories: Array;
  id: string;
  location: {
    address: string;
    city: string;
    cc: string;
    country: string;
    postalCOde: string;
    state: string;
  };
  name: string;
}

export class VenueResponse {
  constructor(result) {
    this.response =  result.response;
  }
  response: {
    groups: Array<{items: Array}>
  };
}

export interface VenueDetailResponse {
  response: {
    venue: object;
  };
}

