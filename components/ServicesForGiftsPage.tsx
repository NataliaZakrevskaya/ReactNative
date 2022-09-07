import React from 'react';
import { Dimensions, FlatList, Image, ListRenderItem, StyleSheet, Text, View } from 'react-native';
import StitchesInfo from './StitchesInfo';
import MyArrowRightSvg from '../svg/MyArrowRightSvg';

const { height, width } = Dimensions.get( 'screen' );
export const WIDTH = width;
const PADDING_HORIZONTAL = 13;

type ServiceType = {
  id: number
  title: string
  text: string
  stitchesCount: number
}
const services: ServiceType[] = new Array( 4 ).fill( null ).map( ( item, index ) => ( {
  id: index + 1,
  title: `Любая услуга или товар добавленная сотрудником`,
  text: 'Краткое описание товара или услуги',
  stitchesCount: 340,
} ) );
const renderServices: ListRenderItem<ServiceType> = ( { item } ) => {
  return <View style={ styles.serviceItem }>
    <View style={ { maxWidth: 250 } }>
      <Text style={ [ styles.text, styles.mainText, { marginBottom: 10 } ] }>{ item.title }</Text>
      <Text style={ [ styles.text, styles.thinText, { fontSize: 12, marginBottom: 10 } ] }>{ item.text }</Text>
      <View style={ {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      } }>
        <Text style={ [ styles.text, styles.thinText, { fontSize: 12, marginRight: 4 } ] }>Подробнее</Text>
        <MyArrowRightSvg style={ styles.arrowRight }/>
      </View>
    </View>
    <View style={ {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    } }>
      <StitchesInfo stitchesCount={ item.stitchesCount }/>
      <Image
        style={ styles.carPicture }
        source={ {
          uri: 'https://www.enterprise.com/content/dam/global-vehicle-images/cars/FORD_FUSION_2020.png',
        } }
      />
    </View>
  </View>;
};

const ServicesForGiftsPage = () => {
  return (
    <FlatList
      style={ styles.list }
      data={ services }
      renderItem={ renderServices }
    />
  );
};

const styles = StyleSheet.create( {
  list: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 16,
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
  serviceItem: {
    backgroundColor: '#fff',
    width: ( WIDTH - ( PADDING_HORIZONTAL * 2 ) ),
    height: 107,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 8,
    paddingLeft: 10,
    paddingRight: 23,
    paddingBottom: 7,
    marginBottom: 12,
  },
  arrowRight: {
    width: 6.72,
    height: 11.08,
    resizeMode: 'contain',
  },
  carPicture: {
    width: 84.84,
    height: 80,
  },
} );

export default ServicesForGiftsPage;