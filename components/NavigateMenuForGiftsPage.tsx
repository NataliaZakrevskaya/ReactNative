import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StitchesInfo from './StitchesInfo';
import MyBackIcon from '../svg/MyBackIcon';

const NavigateMenuForGiftsPage = () => {
  return (
    <View style={ styles.container }>
      <MyBackIcon style={ styles.backIcon }/>
      <Text style={ [ styles.text, styles.mainText ] }>Подарки за баллы</Text>
      <StitchesInfo stitchesCount={ 340 }/>
    </View>
  );
};

const styles = StyleSheet.create( {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#474747',
  },
  mainText: {
    fontWeight: '700',
  },
} );

export default NavigateMenuForGiftsPage;