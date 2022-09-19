import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MyArrowRightSvg from '../svg/MyArrowRightSvg';

const { height, width } = Dimensions.get( 'screen' );
const WIDTH = width;
const PADDING_HORIZONTAL = 13;

const BonusesLink = () => {

  const BONUSES_COUNT = 340;

  return (
    <View style={ styles.container }>
      <Text style={ [ styles.text, styles.thinText ] }>Бонусные баллы: <Text
        style={ [ styles.text, styles.mainText ] }>{ BONUSES_COUNT }</Text></Text>
      <MyArrowRightSvg/>
    </View>
  );
};

const styles = StyleSheet.create( {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 8,
    width: ( WIDTH - ( PADDING_HORIZONTAL * 2 ) - 4 ),
    height: 50,
    paddingLeft: 10,
    paddingRight: 13,
    marginBottom: 14,
    borderColor: '#E8E9EB',
    borderWidth: 1,
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#474747',
  },
  mainText: {
    fontWeight: '700',
    marginBottom: 8,
  },
  thinText: {
    fontWeight: '400',
    fontSize: 14,
  },
  /*arrowRight: {
    resizeMode: 'contain',
  },*/
} );

export default BonusesLink;