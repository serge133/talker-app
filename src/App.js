import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import TouchBoardScreen from './Screens/TouchBoardScreen';
import CreditScreen from './Screens/Settings/CreditScreen';
import SettingsScreen from './Screens/Settings/SettingsScreen';

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
  const SettingsStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name='Settings'
        component={SettingsScreen}
        options={{ title: 'Settings' }}
      />
      <Stack.Screen
        name='Credits'
        component={CreditScreen}
        options={{ title: 'Credits' }}
      />
    </Stack.Navigator>
  );
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name='TouchBoardTab' component={TouchBoardStack} />
        <Tabs.Screen name='SettingsTab' component={SettingsStack} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
