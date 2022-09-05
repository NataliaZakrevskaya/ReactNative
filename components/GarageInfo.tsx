import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import AutoCard from './AutoCard';

const { height, width } = Dimensions.get( 'screen' );
export const WIDTH = width;
const PADDING_HORIZONTAL = 13;

const GarageInfo = () => {
  return (
    <View>
      <Text style={ [ styles.text, styles.mainText ] }>
        Гараж
      </Text>
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
    marginBottom: 8,
  },
} );
export default GarageInfo;