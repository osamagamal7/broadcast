import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {
  LibraryStackParamList,
  FavoriteTracksStackParamList,
  MainBottomTabParamList,
  SearchStackParamList,
} from '../types/Navigation';
import {Search} from '../screens/Search';
import {Library} from '../screens/Library';
import {FavoriteTracks} from '../screens/Favorites';
import {BroadCastDetails} from '../screens/BroadCastDetails';
import {theme} from '../assets/theme/colors';
import {FavIcon, LibraryIcon, SearchIcon} from '../components/Icons';
import {MiniPlayer} from '../components/MiniPlayer';
import {EpisodeDetailScreen} from '../screens/EpisodeDetailScreen.js';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

//ListenNow Stack Nav
const FavoriteTracksStack =
  createStackNavigator<FavoriteTracksStackParamList>();

export const FavoriteTracksStackStackNavigator = () => (
  <FavoriteTracksStack.Navigator
    screenOptions={{headerTintColor: theme.colorBlueLight}}>
    <FavoriteTracksStack.Screen
      name="Favorite"
      component={FavoriteTracks}
      options={{title: 'Favorite Episodes'}}
    />
  </FavoriteTracksStack.Navigator>
);

//Library Stack Nav
const LibraryStack = createStackNavigator<LibraryStackParamList>();

export const LibraryStackNavigator = () => (
  <LibraryStack.Navigator
    screenOptions={{headerTintColor: theme.colorBlueLight}}>
    <LibraryStack.Screen name="Library" component={Library} />
  </LibraryStack.Navigator>
);

//Search Stack Nav
const BroadcastStack = createStackNavigator();

const BroadcastStackNavigator = () => {
  return (
    <BroadcastStack.Navigator
      screenOptions={{headerTintColor: theme.colorBlueLight}}>
      <BroadcastStack.Screen
        name="BroadCastDetails"
        component={BroadCastDetails}
      />
      <BroadcastStack.Screen
        name="EpisodeDetails"
        component={EpisodeDetailScreen}
      />
    </BroadcastStack.Navigator>
  );
};

//Search Stack Nav
const SearchStack = createStackNavigator<SearchStackParamList>();

export const SearchStackNavigator = () => (
  <SearchStack.Navigator
    screenOptions={{headerTintColor: theme.colorBlueLight}}>
    <SearchStack.Screen name="Search" component={Search} />
    <SearchStack.Screen
      name="BroadCastDetailsNav"
      component={BroadcastStackNavigator}
      options={{title: 'Episode', headerBackTitle: 'Back', headerShown: false}}
    />
  </SearchStack.Navigator>
);

//bottomTab Nav
const MainTab = createBottomTabNavigator<MainBottomTabParamList>();
export const MainTabNavigator: React.FC = () => {
  return (
    <MainTab.Navigator
      initialRouteName="Search"
      tabBar={tabProps => (
        <>
          <MiniPlayer />
          <BottomTabBar {...tabProps} />
        </>
      )}
      tabBarOptions={{
        showLabel: false,
      }}>
      <MainTab.Screen
        name="Favorite"
        component={FavoriteTracksStackStackNavigator}
        options={{
          title: 'Favorite',
          tabBarIcon: ({focused}) => (
            <FavIcon
              color={focused ? theme.colorBlueLight : theme.colorGreyLight}
              size={windowWidth / 14}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Library"
        component={LibraryStackNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <LibraryIcon
              color={focused ? theme.colorBlueLight : theme.colorGreyLight}
              size={windowWidth / 14}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Search"
        component={SearchStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <SearchIcon
              color={focused ? theme.colorBlueLight : theme.colorGreyLight}
              size={windowWidth / 14}
            />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};
