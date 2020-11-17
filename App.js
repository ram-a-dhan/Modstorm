import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Games from './src/screens/Games';
import Mods from './src/screens/Mods';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, size, color }) => {
                let iconName;
                if (route.name === 'Games') {
                  iconName = focused ? 'game-controller' : 'game-controller-outline';
                  return <IonIcons name={iconName} size={size} color={color} />
                } else if (route.name === 'Mods') {
                  iconName = focused ? 'cube' : 'cube-outline';
                  return <MCIcons name={iconName} size={size} color={color} />
                }
              },
            })}
            tabBarOptions={{
              // activeTintColor: 'dodgerblue',
              // inactiveTintColor: 'grey',
              keyboardHidesTabBar: true,
              style: {
                height: 56,
              },
              labelStyle: {
                fontFamily: 'BarlowCondensed-Regular',
                fontSize: 18
              },
              labelPosition: 'beside-icon',
            }}
          >
            <Tab.Screen name="Games" component={Games} />
            <Tab.Screen name="Mods" component={Mods} />
          </Tab.Navigator>
        </NavigationContainer>
    </>
  );
};
