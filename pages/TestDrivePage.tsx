import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import NavigateMenu from '../components/NavigateMenu';

const { height, width } = Dimensions.get( 'screen' );
const WIDTH = width;
const PADDING_HORIZONTAL = 13;

const TestDrivePage = () => {
  const carName = 'Ford Focus III ';
  return (
    <View>
      <NavigateMenu navName={ 'Ford Focus III ' }/>
      <Image
        style={ styles.autoImage }
        source={ {
          uri: 'https://www.enterprise.com/content/dam/global-vehicle-images/cars/FORD_FUSION_2020.png',
        }}
      />
      <Text style={ [ styles.text, styles.mainText, { marginBottom: 12 } ] }>{ carName }</Text>
      <Text style={ [ styles.text, styles.thinText ] }>Описание</Text>
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
export default TestDrivePage;