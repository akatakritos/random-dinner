import { createAction, createEntityAdapter, createSelector, createSlice, nanoid } from '@reduxjs/toolkit';
import { DefaultRestaurants, Restaurant } from '../models';
import { RootState } from './rootStore';

const RestaurantAdapter = createEntityAdapter<Restaurant>();
const initialState = {
  lastChosen: null as string | null,
  ...RestaurantAdapter.getInitialState(),
};

export const restaurantAdded = createAction<{ name: string }>('restaurants/added');
export const restaurantRemoved = createAction<{ id: string }>('restaurants/removed');
export const initializeList = createAction<undefined>('restaurants/initialize');
export const restaurantChosen = createAction<{ id: string }>('restaurants/chosen');

const selectSlice = (state: RootState) => state.restaurants;
const selectors = RestaurantAdapter.getSelectors(selectSlice);

export const selectRestaurants = selectors.selectAll;
export const selectLastChosen = createSelector(selectSlice, (s) => {
  return s.lastChosen ? s.entities[s.lastChosen] : null;
});

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(restaurantAdded, (state, { payload }) =>
        RestaurantAdapter.addOne(state, {
          ...payload,
          id: nanoid(),
        })
      )

      .addCase(restaurantRemoved, (state, { payload }) => RestaurantAdapter.removeOne(state, payload.id))

      .addCase(initializeList, (state) => {
        if (state.ids.length > 0) return state;

        return RestaurantAdapter.addMany(state, DefaultRestaurants);
      })

      .addCase(restaurantChosen, (state, { payload }) => {
        state.lastChosen = payload.id;
      })

      .addDefaultCase((state) => state),
});
