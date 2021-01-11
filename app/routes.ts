import React from 'react';
import { NavigationContainerRef, NavigationProp } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

export type RouteParams = {
  Home: undefined;
};

export type NavProp = NavigationProp<RouteParams>;
export type NavFn = NavigationProp<RouteParams>['navigate'];
export type NavPropsFor<T extends keyof RouteParams> = StackScreenProps<RouteParams, T>;

