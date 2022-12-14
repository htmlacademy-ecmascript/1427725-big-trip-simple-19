import { getPoints } from '../mock/point.js';
import { getOffers } from '../mock/offer.js';
import { getOffersByType } from '../mock/offers-by-type.js';
import { getDestinations } from '../mock/destination.js';

export default class PointsModel {
  points = [...getPoints()];
  offers = getOffers();
  offersByType = getOffersByType();
  destinations = getDestinations();

  getPoints() {
    return this.points;
  }

  getOffers() {
    return this.offers;
  }

  getOffersByType() {
    return this.offersByType;
  }

  getDestinations() {
    return this.destinations;
  }
}
