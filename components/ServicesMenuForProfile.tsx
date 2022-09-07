import React from 'react';
import { Dimensions, FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native';
import MyArrowRightSvg from '../svg/MyArrowRightSvg';
import MyWrenchIcon from '../svg/MyWrenchIcon';

const { height, width } = Dimensions.get( 'screen' );
const WIDTH = width;
const PADDING_HORIZONTAL = 13;
const titles = [ 'История заказов', 'Документы', 'Trade-in' ];

const getItem: ListRenderItem<string> = ( { item } ) => {
  return <View style={ styles.serviceItem }>
    <View style={ {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    } }>
      <MyWrenchIcon style={ styles.wrenchIcon }/>
      <Text>{ item }</Text>
    </View>
    <MyArrowRightSvg/>
  </View>;
};

const ServicesMenuForProfile = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={ false }
      data={ titles }
      renderItem={ getItem }
    />
  );
};

const styles = StyleSheet.create( {
  serviceItem: {
    backgroundColor: '#fff',
    marginBottom: 10,
    width: ( WIDTH - ( PADDING_HORIZONTAL * 2 ) ),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 13,
    paddingLeft: 10.57,
    paddingRight: 18,
    paddingBottom: 13,
    borderRadius: 8,
  },
  wrenchIcon: {
    marginRight: 10.57,
  },
  /*  arrowRight: {
      height: 14,
      width: 8.97,
    },*/
} );

export default ServicesMenuForProfile;