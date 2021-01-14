import AsyncStorage from '@react-native-community/async-storage';
import { Restaurant } from '../models';

export function persist(restaurants: Restaurant[]) {
  return AsyncStorage.multiSet([['restaurants', JSON.stringify(restaurants)]]);
}

export async function load(): Promise<Restaurant[]> {
  const restaurants = await AsyncStorage.getItem('restaurants');
  return restaurants ? JSON.parse(restaurants) : [];
}
