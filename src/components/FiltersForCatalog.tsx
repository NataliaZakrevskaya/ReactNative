import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MyWheelSvg from '../svg/MyWheelSvg';
import MyFiltersIconSvg from '../svg/MyFiltersIconSvg';

const { height, width } = Dimensions.get( 'screen' );
export const WIDTH = width;
const PADDING_HORIZONTAL_FOR_ITEMS = 23;

const FiltersForCatalog = () => {
  return (
    <View style={ {
      display: 'flex',
      flexDirection: 'column',
      width: ( WIDTH - ( PADDING_HORIZONTAL_FOR_ITEMS * 2 ) ),
      backgroundColor: '#fff',
      borderRadius: 8,
      marginTop: 23,
      marginBottom: 24,
      borderColor: '#E8E9EB',
      borderWidth: 1,
    } }>
      <View style={ {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#E6E6E6',
      } }>
        <MyWheelSvg style={ styles.wheelIcon }/>
        <Text style={ [ styles.text, styles.thinText ] }>Марка, модель</Text>
      </View>
      <View style={ {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 12,
      } }>
        <MyFiltersIconSvg style={ styles.filterIcon }/>
        <Text style={ [ styles.text, styles.thinText ] }>Допольнительные фильтры</Text>
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
  thinText: {
    fontWeight: '400',
    fontSize: 14,
  },
  wheelIcon: {
    width: 24,
    height: 24,
    marginRight: 11,
  },
  filterIcon: {
    width: 24,
    height: 24,
    marginRight: 9,
  },
} );

export default FiltersForCatalog;