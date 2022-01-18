import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

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
import {LibraryIcon, ListenNowIcon, SearchIcon} from '../components/Icons';
import {MiniPlayer} from '../components/MiniPlayer';
import {EpisodeDetailScreen} from '../screens/EpisodeDetailScreen.js';

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
const BroadcastStack = createStackNavigator();

const BroadcastStackNavigator = () => {
  return (
    <BroadcastStack.Navigator headerMode="none">
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
      options={{title: 'Episode', headerBackTitle: 'Back'}}
    />
  </SearchStack.Navigator>
);

//bottomTab Nav
const MainTab = createBottomTabNavigator<MainBottomTabParamList>();
export const MainTabNavigator: React.FC = () => {
  return (
    <MainTab.Navigator
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
        name="ListenNow"
        component={ListenNowStackNavigator}
        options={{
          title: 'Listen Now',
          tabBarIcon: ({focused}) => (
            <ListenNowIcon
              color={focused ? theme.colorBlueLight : theme.colorDarkGrey}
              size={25}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Library"
        component={LibraryStackNavigator}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <LibraryIcon
              color={focused ? theme.colorBlueLight : theme.colorDarkGrey}
              size={25}
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
              color={focused ? theme.colorBlueLight : theme.colorDarkGrey}
              size={25}
            />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};
