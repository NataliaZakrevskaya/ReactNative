import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MyBackIcon from '../svg/MyBackIcon';

const { height, width } = Dimensions.get( 'screen' );
const WIDTH = width;

const NavigateMenu = ( { navName }: { navName: string } ) => {

  return (
    <View style={ {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: ( ( WIDTH / 3 ) * 1.9 ),
    } }>
      <MyBackIcon style={ styles.backIcon }/>
      <Text style={ [ styles.text, styles.mainText ] }>
        { navName }
      </Text>
    </View>
  );
};

const styles = StyleSheet.create( {
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

export default NavigateMenu;