import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';

const { height, width } = Dimensions.get( 'screen' );
export const WIDTH = width;
const PADDING_HORIZONTAL = 13;

const NavbarCatalog = ( { setMenuName, selectMenu }: any ) => {
  return (
    <View style={ {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: WIDTH - ( PADDING_HORIZONTAL * 2 ),
      marginTop: 13,
    } }>
      <View>
        <Pressable
          style={ ( { pressed } ) => [ pressed && styles.autoButton ] }
          onPress={ () => setMenuName( 'auto' ) }
        ><Text
          style={ [ styles.text, styles.mainText, { marginRight: 50, marginLeft: 5 } ] }>Автомобили</Text></Pressable>
        { selectMenu === 'auto' && <View style={ { width: 105, height: 2, backgroundColor: '#07A95B' } }/> }
      </View>
      <View>
        <Pressable
          style={ ( { pressed } ) => [ pressed && styles.autoButton ] }
          onPress={ () => setMenuName( 'services' ) }
        >
          <Text style={ [ styles.text, styles.mainText, { marginLeft: 3 } ] }>Услуги</Text>
        </Pressable>
        { selectMenu === 'services' && <View style={ { width: 62, height: 2, backgroundColor: '#07A95B' } }/> }
      </View>
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
  active: {
    color: 'green',
  },
  autoButton:
    {
      opacity: 0.5,
    }
  ,
} );

export default NavbarCatalog;