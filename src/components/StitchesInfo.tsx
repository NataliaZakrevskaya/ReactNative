import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyStitchesSvg from '../svg/MyStitchesSvg';

const StitchesInfo = ( { stitchesCount }: { stitchesCount: number } ) => {
  return (
    <View style={ styles.stitchesContainer }>
      <MyStitchesSvg style={ styles.stitchesLogo }/>
      <Text style={ [ styles.text, styles.stitchesText ] }>{ stitchesCount }</Text>
    </View>
  );
};

const styles = StyleSheet.create( {
  stitchesContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  stitchesLogo: {
    width: 15,
    height: 15,
    marginRight: 3,
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#474747',
  },
  stitchesText: {
    fontWeight: '600',
    fontSize: 14,
  },
} );

export default StitchesInfo;