import {NavigationContainer} from '@react-navigation/native';

import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/home/Home';

const MainStack = createStackNavigator();

export const AppNavContainer: React.FC = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Home" component={Home} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
