import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamList} from '../types/Navigation';
import {MainTabNavigator} from './MainBottomTabNavigator';

const RootStackNavigator = createStackNavigator<RootStackParamList>();

export const AppNavContainer: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator.Navigator headerMode="none">
        <RootStackNavigator.Screen name="Tabs" component={MainTabNavigator} />
      </RootStackNavigator.Navigator>
    </NavigationContainer>
  );
};
