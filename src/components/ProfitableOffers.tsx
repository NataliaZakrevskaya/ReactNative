import React from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

type CarItemType = {
  id: number
  title: string
  mileage: number
  price: number
  priceWithDiscount: null | number
}
const carItem: CarItemType[] = new Array( 3 ).fill( null ).map( ( item, index ) => ( {
  id: index + 1,
  title: 'Ford Focus III',
  mileage: 34566,
  price: 923000,
  priceWithDiscount: 890000,
} ) );
const render: ListRenderItem<CarItemType> = ( { item } ) => {

  return <View style={ styles.carItem }>
    <View>
      <Image
        style={ styles.carImage }
        source={ {
          uri: 'https://www.enterprise.com/content/dam/global-vehicle-images/cars/FORD_FUSION_2020.png',
        } }
      />
    </View>
    <View style={ {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: 11,
      paddingRight: 11,
    } }>
      <View>
        <Text style={ [ styles.text, styles.mainText, { paddingBottom: 0 } ] }>{ item.title }</Text>
        <Text style={ [ styles.text, styles.thinText ] }>Пробег: <Text
          style={ [ styles.text, styles.mainText ] }>{ item.mileage } км.</Text></Text>
      </View>
      <View>
        <Text style={ [ styles.text, styles.thinText, { color: '#BFBFBF' } ] }>{ item.price } ₽</Text>
        <Text style={ [ styles.text, styles.mainText, { color: '#07A95B' } ] }>{ item.priceWithDiscount } ₽</Text>
      </View>
    </View>
  </View>
    ;
};

const ProfitableOffers = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={ { flex: 1 } }>
      <Text style={ [ styles.text, styles.mainText, { marginBottom: 24 } ] }>Выгодные предложения</Text>
      <SafeAreaView style={ { flex: 1 } }>
        <Pressable onPress={ () => navigation.navigate( 'Детализация авто' ) }>
          <FlatList
            showsVerticalScrollIndicator={ false }
            data={ carItem }
            renderItem={ render }
            scrollEnabled={ false }
          />
        </Pressable>
      </SafeAreaView>
    </ScrollView>
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
  carItem: {
    width: 314,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    paddingBottom: 11,
    borderColor: '#E8E9EB',
    borderWidth: 1,
  },
  carImage: {
    width: 314,
    minHeight: 108,
    resizeMode: 'contain',
    marginBottom: 11,
  },
} );

export default ProfitableOffers;