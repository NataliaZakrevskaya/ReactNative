import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProfileInfo from '../components/ProfileInfo';
import AutoCardForGaragePage from '../components/AutoCardForGaragePage';

const GaragePage = () => {
  return (
    <View>
      <ProfileInfo/>
      <Text style={ [ styles.text, styles.mainText ] }>
        Гараж
      </Text>
      <AutoCardForGaragePage/>
      <AutoCardForGaragePage/>
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
    marginBottom: 8,
  },
} );

export default GaragePage;