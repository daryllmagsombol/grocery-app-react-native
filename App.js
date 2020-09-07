import 'react-native-gesture-handler';
import React, { Component } from "react";
import Home from "./Home";
import Cart from "./Cart";
import Profile from "./Profile";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator()
const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <Icon type="FontAwesome" name="home" />
              );
            } else if (route.name === 'Cart') {
              return (
                <Icon type="Feather" name="shopping-cart"/>
              );
            }
             else if (route.name === 'Profile') {
              return (
                <Icon type="Feather" name="user" />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cart" component={Cart} options={{ tabBarBadge: 3 }} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );

}

export default App
