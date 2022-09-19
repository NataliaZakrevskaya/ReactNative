import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { CatalogPage } from '../pages/CatalogPage';
import TestDrivePage from '../pages/TestDrivePage';

const CatalogStack = createNativeStackNavigator();

function CatalogStackScreen() {
  return (
    <CatalogStack.Navigator
      initialRouteName="Каталог"
      screenOptions={ {
        headerShown: false,
      } }>
      <CatalogStack.Screen name="Каталог" component={ CatalogPage }/>
      <CatalogStack.Screen name="Детализация авто" component={ TestDrivePage }/>
    </CatalogStack.Navigator>
  );
}

export default CatalogStackScreen;