import { nanoid } from '@reduxjs/toolkit';

export interface Restaurant {
  id: string;
  name: string;
}

export const DefaultRestaurants: Restaurant[] = [
  {
    id: nanoid(),
    name: 'McDonalds',
  },
  {
    id: nanoid(),
    name: 'Burger Kin',
  },
  {
    id: nanoid(),
    name: "Wendy's",
  },
];
