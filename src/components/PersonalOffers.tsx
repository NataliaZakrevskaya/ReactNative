import React from 'react';
import { Dimensions, FlatList, Image, ListRenderItem, StyleSheet, Text, View } from 'react-native';

const { height, width } = Dimensions.get( 'screen' );
export const WIDTH = width;
const PADDING_HORIZONTAL = 13;

type OfferType = {
  id: number
  title: string
  text: string
}
const offers: OfferType[] = new Array( 1 ).fill( null ).map( ( item, index ) => ( {
  id: index + 1,
  title: `Диагностика ходовой в ПОДАРОК!`,
  text: 'При замене масла или любой другой жидкости в авто',
} ) );
const renderOffers: ListRenderItem<OfferType> = ( { item } ) => {
  return <View style={ styles.serviceItem }>
    <View style={ { maxWidth: 200 } }>
      <Text style={ [ styles.text, styles.mainText, { marginBottom: 3 } ] }>{ item.title }</Text>
      <Text style={ [ styles.text, styles.thinText, { fontSize: 12, marginBottom: 6 } ] }>{ item.text }</Text>
    </View>
    <View>
      <Image
        style={ styles.carPicture }
        source={ {
          uri: 'https://cdn4.iconfinder.com/data/icons/love-velentine/140/car__gift__vehicle__present__surprise-512.png',
        } }
      />
    </View>
  </View>;
};

const PersonalOffers = () => {
  const getHeader = () => {
    return <Text style={ [ styles.text, styles.mainText, { marginBottom: 10 } ] }>
      Персональные предложения
    </Text>;
  };
  return (
    <FlatList
      data={ offers }
      renderItem={ renderOffers }
      ListHeaderComponent={ getHeader }
      scrollEnabled={ false }
    />
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
    paddingLeft: 12,
    paddingRight: 15,
    paddingBottom: 7,
    marginBottom: 8,
    borderColor: '#E8E9EB',
    borderWidth: 1,
  },
  carPicture: {
    width: 128,
    height: 90,
    resizeMode: 'contain',
  },
} );

export default PersonalOffers;