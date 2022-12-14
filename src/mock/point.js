import { nanoid } from 'nanoid';
import { getRandomArrayElement } from '../utils/common.js';

const mockPoints = [
  {
    basePrice: 1000,
    dateFrom: new Date('2022-01-01T05:30'),
    dateTo: new Date('2022-01-02T21:45'),
    destId: 0,
    selectedOffers: [1, 2],
    type: 'taxi',
    id: nanoid(),
  },
  {
    basePrice: 2000,
    dateFrom: new Date('2022-02-02T01:15'),
    dateTo: new Date('2022-03-03T02:20'),
    destId: 1,
    selectedOffers: [1],
    type: 'bus',
    id: nanoid(),
  },
  {
    basePrice: 3000,
    dateFrom: new Date('2022-10-10T15:30'),
    dateTo: new Date('2022-11-11T17:30'),
    destId: 2,
    selectedOffers: [2, 3],
    type: 'train',
    id: nanoid(),
  },
  {
    basePrice: 4000,
    dateFrom: new Date('2023-12-01T18:00'),
    dateTo: new Date('2023-01-11T06:30'),
    destId: 3,
    selectedOffers: [3, 4],
    type: 'ship',
    id: nanoid(),
  },
];

const getRandomPoint = () => {
  const point = getRandomArrayElement(mockPoints);
  return point;
};

const getPoints = () => mockPoints;

export { getPoints, getRandomPoint };
