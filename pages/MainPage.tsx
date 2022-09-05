import React from 'react';
import { View } from 'react-native';
import ProfileInfo from '../components/ProfileInfo';
import GarageInfo from '../components/GarageInfo';
import UsefulInfo from '../components/UsefulInfo';
import DiscountsInfo from '../components/DiscountsInfo';

const MainPage = () => {
  return (
    <View>
      <ProfileInfo/>
      <GarageInfo/>
      <UsefulInfo/>
      <DiscountsInfo/>
    </View>
  );
};

export default MainPage;