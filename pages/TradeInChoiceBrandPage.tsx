import React from 'react';
import NavigateMenu from '../components/NavigateMenu';
import { Dimensions, FlatList, Image, ListRenderItem, StyleSheet, Text, TextInput, View } from 'react-native';

const { height, width } = Dimensions.get( 'screen' );
export const WIDTH = width;
const PADDING_HORIZONTAL = 13;

type BrandType = {
  id: number
  name: string
}
const brands: BrandType[] = new Array( 7 ).fill( null ).map( ( item, index ) => ( {
  id: index + 1,
  name: `Audi`,
} ) );
const renderBrands: ListRenderItem<BrandType> = ( { item } ) => {
  return <View style={ styles.brandItem }>
    <View style={ {
      display: 'flex',
      flexDirection: 'row',
    } }>
      <Image
        style={ styles.baseIcon }
        source={ require( '@expo/assets/base.png' ) }
      />
      <Text style={ [ styles.text, styles.thinText ] }>{ item.name }</Text>
    </View>
    <Image
      style={ styles.arrowRight }
      source={ require( '@expo/assets/arrowRight.png' ) }
    />
  </View>;
};

const TradeInChoiceBrandPage = () => {
  return (
    <View>
      <NavigateMenu navName={ 'Рассчет TRADE-IN' }/>
      <TextInput
        style={ styles.input }
        onChangeText={ () => {
        } }
        value={ '' }
        placeholder="Поиск"
      />
      <Text style={ [ styles.text, styles.mainText ] }>Популярные Марки</Text>
      <FlatList
        data={ brands }
        renderItem={ renderBrands }
      />
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
  input: {
    width: ( WIDTH - ( PADDING_HORIZONTAL * 2 ) ),
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginTop: 21,
    marginBottom: 16,
    paddingLeft: 11.84,
    paddingTop: 17,
    paddingBottom: 17,
  },
  brandItem: {
    width: ( WIDTH - ( PADDING_HORIZONTAL * 2 ) ),
    height: 50,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingLeft: 11,
    paddingRight: 18,
    borderRadius: 8,
  },
  baseIcon: {
    width: 25,
    height: 25,
    marginRight: 11.36,
  },
  arrowRight: {
    height: 14,
    width: 9,
    resizeMode: 'contain',
  },
} );

export default TradeInChoiceBrandPage;