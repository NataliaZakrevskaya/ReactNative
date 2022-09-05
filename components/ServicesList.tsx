import React from 'react';
import { Dimensions, FlatList, Image, ListRenderItem, StyleSheet, Text, View } from 'react-native';

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
      <Image
        style={ styles.wrenchIcon }
        source={ require( '@expo/assets/wrenchIcon.png' ) }
      />
      <Text>{ item.title }</Text>
    </View>
    <Image
      style={ styles.arrowRight }
      source={ require( '@expo/assets/arrowRight.png' ) }
    />
  </View>;
};

const ServicesList = () => {
  return (
    <View style={ { height: ( ( HEIGHT / 3 ) * 1.6 ) } }>
      <FlatList
        style={ { marginTop: 19 } }
        showsVerticalScrollIndicator={ false }
        data={ serviceItem }
        renderItem={ getItem }
      />
    </View>
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