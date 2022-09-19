import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import StitchesInfo from './StitchesInfo';
import MyBackIcon from '../svg/MyBackIcon';
import { useNavigation } from '@react-navigation/native';

const NavigateMenuForGiftsPage = () => {
  const navigation = useNavigation();
  return (
    <View style={ styles.container }>
      <Pressable onPress={() => navigation.navigate('Профиль')}>
        <MyBackIcon style={ styles.backIcon }/>
      </Pressable>
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