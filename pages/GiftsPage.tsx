import React from 'react';
import { View } from 'react-native';
import NavigateMenuForGiftsPage from '../components/NavigateMenuForGiftsPage';
import ServicesForGiftsPage from '../components/ServicesForGiftsPage';

const GiftsPage = () => {
  return (
    <View>
      <NavigateMenuForGiftsPage/>
      <ServicesForGiftsPage/>
    </View>
  );
};

export default GiftsPage;