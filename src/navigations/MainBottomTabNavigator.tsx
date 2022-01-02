import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  LibraryStackParamList,
  ListenNowStackParamList,
  MainBottomTabParamList,
  SearchStackParamList,
} from '../types/Navigation';
import {Search} from '../screens/Search';
import {Library} from '../screens/Library';
import {ListenNow} from '../screens/ListenNow';
import {BroadCastDetails} from '../screens/BroadCastDetails';
import {theme} from '../assets/theme/colors';

//ListenNow Stack Nav
const ListenNowStack = createStackNavigator<ListenNowStackParamList>();

export const ListenNowStackNavigator = () => (
  <ListenNowStack.Navigator>
    <ListenNowStack.Screen
      name="ListenNow"
      component={ListenNow}
      options={{title: 'Listen Now'}}
    />
  </ListenNowStack.Navigator>
);

//Library Stack Nav
const LibraryStack = createStackNavigator<LibraryStackParamList>();

export const LibraryStackNavigator = () => (
  <LibraryStack.Navigator>
    <LibraryStack.Screen name="Library" component={Library} />
  </LibraryStack.Navigator>
);

//Search Stack Nav
const SearchStack = createStackNavigator<SearchStackParamList>();

export const SearchStackNavigator = () => (
  <SearchStack.Navigator
    screenOptions={{headerTintColor: theme.colorBlueLight}}>
    <SearchStack.Screen name="Search" component={Search} />
    <SearchStack.Screen
      name="BroadCastDetails"
      component={BroadCastDetails}
      options={{title: 'Details'}}
    />
  </SearchStack.Navigator>
);

//bottomTab Nav
const MainTab = createBottomTabNavigator<MainBottomTabParamList>();
export const MainTabNavigator: React.FC = () => {
  return (
    <MainTab.Navigator>
      <MainTab.Screen
        name="ListenNow"
        component={ListenNowStackNavigator}
        options={{title: 'Listen Now'}}
      />
      <MainTab.Screen name="Library" component={LibraryStackNavigator} />
      <MainTab.Screen name="Search" component={SearchStackNavigator} />
    </MainTab.Navigator>
  );
};
