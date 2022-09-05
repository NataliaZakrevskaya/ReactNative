import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const { height, width } = Dimensions.get( 'screen' );
const WIDTH = width;
const PADDING_HORIZONTAL = 13;

const BonusPage = () => {

  const serviceName = 'Услуга номер 1';

  return (
    <View>
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
          { serviceName }
        </Text>
      </View>
      <Image
        style={ styles.autoImage }
        source={ require( '@expo/assets/carImage.png' ) }
      />
      <Text style={ [ styles.text, styles.mainText, {marginBottom: 12} ] }>Любая услуга или товар добавленная сотрудником</Text>
      <Text style={ [ styles.text, styles.thinText ] }>Полное описание подарочной акции </Text>
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
  thinText: {
    fontWeight: '400',
    fontSize: 14,
  },
  autoImage: {
    width: ( WIDTH - ( PADDING_HORIZONTAL * 2 ) ),
    height: 264,
    resizeMode: 'contain',
  },
} );

export default BonusPage;