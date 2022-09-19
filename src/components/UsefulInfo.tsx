import React from 'react';
import { Dimensions, FlatList, Image, ListRenderItem, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MyArrowRightSvg from '../svg/MyArrowRightSvg';

const { height, width } = Dimensions.get( 'screen' );
export const WIDTH = width;
const PADDING_HORIZONTAL = 13;

type ServiceType = {
  id: number
  title: string
  text: string
}
const services: ServiceType[] = new Array( 2 ).fill( null ).map( ( item, index ) => ( {
  id: index + 1,
  title: `Название услуги`,
  text: 'Краткое описание услуги которую предлагает ДЦ',
} ) );
const render: ListRenderItem<ServiceType> = ( { item } ) => {
  return <View style={ styles.serviceItem }>
    <View style={ { maxWidth: 200 } }>
      <Text style={ [ styles.text, styles.mainText, { marginBottom: 15 } ] }>{ item.title }</Text>
      <Text style={ [ styles.text, styles.thinText, { fontSize: 12, marginBottom: 6 } ] }>{ item.text }</Text>
      <View style={ {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      } }>
        <Text style={ [ styles.text, styles.thinText, { fontSize: 12, marginRight: 4 } ] }>Подробнее</Text>
        <MyArrowRightSvg/>
      </View>
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

const UsefulInfo = () => {
  return (
    <View style={ { marginTop: 10 } }>
      <Text style={ [ styles.text, styles.mainText ] }>
        Полезное
      </Text>
      <SafeAreaView style={ { flex: 1 } }>
        <FlatList
          showsVerticalScrollIndicator={ false }
          data={ services }
          renderItem={ render }
          scrollEnabled={ false }
        />
      </SafeAreaView>
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
    marginBottom: 8,
    borderColor: '#E8E9EB',
    borderWidth: 1,
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

export default UsefulInfo;