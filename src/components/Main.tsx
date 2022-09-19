import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyProfileIconForNavigation } from '../svg/MyProfileIconForNavigation';
import ProfileStackScreen from '../screensNavigation/ProfileScreenNavigation';
import MainStackScreen from '../screensNavigation/MainScreenNavigation';
import { MyHomeIconForNavigation } from '../svg/MyHomeIconForNavigation';
import CatalogStackScreen from '../screensNavigation/CatalogScreenNavigation';
import MyCatalogIconForNavigation from '../svg/MyCatalogIconForNavigation';
import { ChatPage } from '../pages/ChatPage';
import { MyChatIconForNavigation } from '../svg/MyChatIconForNavigation';
import MyEllipseSvg from '../svg/MyEllipseSvg';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();
export const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="Главная"
      screenOptions={ {
        headerShown: false,
        tabBarActiveTintColor: '#07A95B',
        tabBarInactiveTintColor: '#BFBFBF',
      } }>
      <Tab.Screen name="Главная" component={ MainStackScreen } options={ {
        tabBarIcon: ( { color } ) => (
          <MyHomeIconForNavigation color={ color }/>
        ),
      } }/>
      <Tab.Screen name="Каталог" component={ CatalogStackScreen } options={ {
        tabBarIcon: ( { color } ) => (
          <MyCatalogIconForNavigation color={ color }/>
        ),
      } }/>
      <Tab.Screen name="Чат" component={ ChatPage } options={ {
        tabBarIcon: ( { color } ) => (
          <View style={{position: 'relative', paddingHorizontal: 1, paddingVertical: 1}}>
          <MyChatIconForNavigation color={ color }/>
          <MyEllipseSvg style={{position: 'absolute', top: 0, right: 0}}/>
          </View>
        ),
      } }/>
      <Tab.Screen name="Профиль" component={ ProfileStackScreen } options={ {
        tabBarIcon: ( { color } ) => (
          <MyProfileIconForNavigation color={ color }/>
        ),
      } }/>
    </Tab.Navigator>
  );
};

