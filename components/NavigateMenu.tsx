import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const { height, width } = Dimensions.get( 'screen' );
const WIDTH = width;
const PADDING_HORIZONTAL = 13;

const NavigateMenu = ({navName}: {navName: string}) => {

  return (
    <View style={ {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: ( ( WIDTH / 3 ) * 1.9 ),
    } }>
      <Image
        style={ styles.backIcon }
        source={ require( '@expo/assets/backIcon.png' ) }
      />
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