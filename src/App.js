import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import TouchBoardScreen from './Screens/TouchBoardScreen';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export default function Navigation() {
  const TouchBoardStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name='TouchBoard'
        component={TouchBoardScreen}
        options={{
          title: 'Touch Board',
        }}
      />
    </Stack.Navigator>
  );
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name='TouchBoardTab' component={TouchBoardStack} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
