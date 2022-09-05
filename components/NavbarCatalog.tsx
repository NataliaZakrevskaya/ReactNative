import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const { height, width } = Dimensions.get( 'screen' );
export const WIDTH = width;

const NavbarCatalog = () => {
  return (
    <View style={ {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: ( WIDTH / 2 ),
    } }>
      <Text style={ [ styles.text, styles.mainText ] }>Автомобили</Text>
      <Text style={ [ styles.text, styles.mainText ] }>Услуги</Text>
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

export default NavbarCatalog;