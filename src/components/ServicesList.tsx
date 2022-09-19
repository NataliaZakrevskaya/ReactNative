import React from 'react';
import { Dimensions, FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native';
import MyWrenchIcon from '../svg/MyWrenchIcon';
import MyArrowRightSvg from '../svg/MyArrowRightSvg';

const { height, width } = Dimensions.get( 'screen' );
const WIDTH = width;
const HEIGHT = height;
const PADDING_HORIZONTAL = 13;

type ServiceItemType = {
  id: number
  title: string
}
const serviceItem: ServiceItemType[] = new Array( 5 ).fill( null ).map( ( item, index ) => ( {
  id: index + 1,
  title: 'Название услуги',
} ) );
const getItem: ListRenderItem<ServiceItemType> = ( { item } ) => {
  return <View style={ styles.serviceItem }>
    <View style={ {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    } }>
      <MyWrenchIcon style={ styles.wrenchIcon }/>
      <Text>{ item.title }</Text>
    </View>
    <MyArrowRightSvg style={ styles.arrowRight }/>
  </View>;
};

const ServicesList = () => {
  return (
    <FlatList
      style={ { marginTop: 19 } }
      showsVerticalScrollIndicator={ false }
      data={ serviceItem }
      renderItem={ getItem }
      scrollEnabled={ false }
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
    borderColor: '#E8E9EB',
    borderWidth: 1,
  },
  wrenchIcon: {
    width: 25.38,
    height: 24,
    marginRight: 10.57,
  },
  arrowRight: {
    height: 14,
    width: 8.97,
  },
} );

export default ServicesList;