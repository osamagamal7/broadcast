import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamList} from '../types/Navigation';
import {MainTabNavigator} from './MainBottomTabNavigator';
import {PlayerScreen} from '../screens/Player';

const RootStackNavigator = createStackNavigator<RootStackParamList>();
const MainStack = createStackNavigator();

export const AppNavContainer: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator.Navigator headerMode="none" mode="modal">
        <RootStackNavigator.Screen name="Tabs" component={MainTabNavigator} />
        <MainStack.Screen name="Player" component={PlayerScreen} />
      </RootStackNavigator.Navigator>
    </NavigationContainer>
  );
};
