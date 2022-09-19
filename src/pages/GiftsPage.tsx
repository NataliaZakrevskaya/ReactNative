import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavigateMenuForGiftsPage from '../components/NavigateMenuForGiftsPage';
import ServicesForGiftsPage from '../components/ServicesForGiftsPage';

const PADDING_HORIZONTAL = 13;
const GiftsPage = () => {
  return (
    <View style={ styles.container }>
      <NavigateMenuForGiftsPage/>
      <ServicesForGiftsPage/>
    </View>
  );
};
const styles = StyleSheet.create( {
  container: {
    flex: 1,
    display: 'flex',
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingTop: 20,
  },
} );
export default GiftsPage;