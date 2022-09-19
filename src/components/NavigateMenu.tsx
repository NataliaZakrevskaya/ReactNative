import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import MyBackIcon from '../svg/MyBackIcon';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get( 'screen' );
const WIDTH = width;

const NavigateMenu = ( { navName, screen }: { navName: string, screen: string } ) => {
  const navigation = useNavigation();
  return (
    <View style={ {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: ( ( WIDTH / 3 ) * 1.9 ),
      marginTop: 20,
    } }>
      <Pressable onPress={ () => navigation.navigate( screen ) }>
        <MyBackIcon style={ styles.backIcon }/>
      </Pressable>
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