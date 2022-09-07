import React from 'react';
import { Dimensions, FlatList, Image, ListRenderItem, StyleSheet, Text, TextInput, View } from 'react-native';
import NavigateMenu from '../components/NavigateMenu';
import MyBaseSvg from '../svg/MyBaseSvg';
import MyArrowRightSvg from '../svg/MyArrowRightSvg';

const { height, width } = Dimensions.get( 'screen' );
const WIDTH = width;
const PADDING_HORIZONTAL = 13;
type ModelType = {
  id: number
  name: string
}
const models: ModelType[] = new Array( 7 ).fill( null ).map( ( item, index ) => ( {
  id: index + 1,
  name: `A1`,
} ) );
const renderModels: ListRenderItem<ModelType> = ( { item } ) => {
  return <View style={ styles.modelItem }>
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

const TradeInChoiceModelPage = () => {
  return (
    <View>
      <NavigateMenu navName={ 'Модель' }/>
      <TextInput
        style={ styles.input }
        onChangeText={ () => {
        } }
        value={ '' }
        placeholder="Поиск"
      />
      <FlatList
        data={ models }
        renderItem={ renderModels }
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
  modelItem: {
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

export default TradeInChoiceModelPage;