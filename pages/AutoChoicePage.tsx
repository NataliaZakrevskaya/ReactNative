import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProfileInfo from '../components/ProfileInfo';
import AutoCard from '../components/AutoCard';

const AutoChoicePage = () => {
  return (
    <View>
      <ProfileInfo/>
      <Text style={ [ styles.text, styles.mainText, {marginBottom: 8} ] }>Запись в сервис</Text>
      <AutoCard/>
      <AutoCard/>
    </View>
  );
};

const styles = StyleSheet.create( {
  text: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#474747',
  },
  mainText: {
    fontWeight: '700',
  },
} );

export default AutoChoicePage;