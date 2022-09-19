import React from 'react';
import NavigateMenu from '../components/NavigateMenu';
import {
  Dimensions,
  FlatList,
  ListRenderItem,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import MyBaseSvg from '../svg/MyBaseSvg';
import MyArrowRightSvg from '../svg/MyArrowRightSvg';
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get( 'screen' );
const WIDTH = width;
const HEIGHT = height;
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
      <MyBaseSvg style={ styles.baseIcon }/>
      <Text style={ [ styles.text, styles.thinText ] }>{ item.name }</Text>
    </View>
    <MyArrowRightSvg style={ styles.arrowRight }/>
  </View>;
};
const TradeInChoiceBrandPage = () => {
  const navigation = useNavigation();
  const onBrandClick = () => {
    navigation.navigate( 'Trade-in выбор модели' );
  };
  return (
    <View style={ styles.container }>
      <NavigateMenu navName={ 'Рассчет TRADE-IN' } screen={ 'Гараж' }/>
      <TextInput
        style={ styles.input }
        onChangeText={ () => {
        } }
        value={ '' }
        placeholder="Поиск"
      />
      <Text style={ [ styles.text, styles.mainText, { marginBottom: 7 } ] }>Популярные Марки</Text>
      <SafeAreaView style={ { flex: 1 } }>
        <Pressable onPress={ onBrandClick }>
          <FlatList
            data={ brands }
            renderItem={ renderBrands }
            scrollEnabled={ false }
          />
        </Pressable>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    display: 'flex',
    paddingHorizontal: PADDING_HORIZONTAL,
    backgroundColor: '#f9f9fa',
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
    borderColor: '#ccc',
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