import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splash from './src/screens/Splash';
import Games from './src/screens/Games';
import Mods from './src/screens/Mods';
import ModDetails from './src/screens/ModDetails';
import ModSearchResults from './src/screens/ModSearchResults';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ModStack = createStackNavigator();

function ModStackScreen() {
  return (
    <ModStack.Navigator headerMode="none">
      <ModStack.Screen name="Mods" component={Mods} />
      <ModStack.Screen name="ModDetails" component={ModDetails} />
      <ModStack.Screen name="ModSearchResults" component={ModSearchResults} />
    </ModStack.Navigator>
  );
}

const AppTab = createBottomTabNavigator();

function AppTabScreen() {
  return (
    <AppTab.Navigator
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
      // initialRouteName="Mods"
      tabBarOptions={{
        // activeTintColor: 'dodgerblue',
        // inactiveTintColor: 'grey',
        keyboardHidesTabBar: true,
        style: {
          borderTopWidth: 0,
        },
        labelStyle: {
          fontFamily: 'BarlowCondensed-Regular',
          fontSize: 18
        },
        labelPosition: 'beside-icon',
      }}
    >
      <AppTab.Screen name="Games" component={Games} />
      <AppTab.Screen
        name="Mods"
        component={ModStackScreen}
        options={{ unmountOnBlur: true }}
      />
    </AppTab.Navigator>
  );
}

const InitStack = createStackNavigator();

export default function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  return (
    <>
      <StatusBar
        // translucent
        backgroundColor="black"
        barStyle="light-content"
      />
      <NavigationContainer>
        <InitStack.Navigator headerMode="none">
          {
            showSplashScreen
            ? <InitStack.Screen name="Splash"
                component={Splash}
                initialParams={{ setShowSplashScreen }}
              />
            : <InitStack.Screen name="App" component={AppTabScreen} />
          }
        </InitStack.Navigator>
      </NavigationContainer>
    </>
  );
}
