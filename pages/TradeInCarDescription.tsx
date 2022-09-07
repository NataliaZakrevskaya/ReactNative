import React from 'react';
import { Dimensions, FlatList, ListRenderItem, StyleSheet, Text, TextInput, View } from 'react-native';
import NavigateMenu from '../components/NavigateMenu';
import MyCheckboxSvg from '../svg/MyCheckboxSvg';
import MyBaseSvg from '../svg/MyBaseSvg';
import MyArrowRightSvg from '../svg/MyArrowRightSvg';

const { height, width } = Dimensions.get( 'screen' );
const WIDTH = width;
const PADDING_HORIZONTAL = 13;
type BodyPartType = {
  id: number
  name: string
}
const bodyPart: BodyPartType[] = new Array( 9 ).fill( null ).map( ( item, index ) => ( {
  id: index + 1,
  name: `Часть кузова`,
} ) );
const renderBodyPart: ListRenderItem<BodyPartType> = ( { item } ) => {
  return <View style={ styles.bodyPartItem }>
    <MyCheckboxSvg style={ styles.checkbox }/>
    <Text style={ [ styles.text, styles.thinText ] }>{ item.name }</Text>
  </View>;
};

const TradeInCarDescription = () => {
  return (
    <View>
      <NavigateMenu navName={ 'Описание автомобиля' }/>
      <TextInput
        style={ styles.input }
        onChangeText={ () => {
        } }
        value={ '' }
        placeholder="VIN"
      />
      <TextInput
        style={ styles.input }
        onChangeText={ () => {
        } }
        value={ '' }
        placeholder="Текущий пробег"
      />
      <TextInput
        multiline
        numberOfLines={ 10 }
        style={ styles.textarea }
        onChangeText={ () => {
        } }
        value={ '' }
        placeholder="Укажите уникальные особенности вашего авто"
        keyboardType="numeric"
      />
      <View style={ styles.damageItem }>
        <View style={ {
          display: 'flex',
          flexDirection: 'row',
        } }>
          <MyBaseSvg style={ styles.baseIcon }/>
          <Text style={ [ styles.text, styles.thinText ] }>Повреждения автомобиля</Text>
        </View>
        <MyArrowRightSvg style={ styles.arrowRight }/>
      </View>
      <View style={ styles.damageCarFullList }>
        <View style={ {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        } }>
          <View style={ {
            display: 'flex',
            flexDirection: 'row',
          } }>
            <MyBaseSvg style={ styles.baseIcon }/>
            <Text style={ [ styles.text, styles.thinText ] }>Повреждения автомобиля</Text>
          </View>
          <MyArrowRightSvg style={ styles.arrowRight }/>
        </View>
        <Text style={ [ styles.text, styles.thinText, {
          marginTop: 11,
          color: '#BFBFBF',
          paddingLeft: 7,
          paddingRight: 7,
          fontSize: 12,
          lineHeight: 14,
          marginBottom: 10,
        } ] }>Укажите галочкой те элементы кузова с которыми производился ремонт</Text>
        <FlatList
          data={ bodyPart }
          renderItem={ renderBodyPart }
        />
      </View>
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
    marginBottom: 10,
    paddingLeft: 11.84,
    paddingTop: 17,
    paddingBottom: 17,
  },
  textarea: {
    width: ( WIDTH - ( PADDING_HORIZONTAL * 2 ) ),
    height: 123,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    paddingLeft: 12,
    paddingBottom: 17,
    paddingRight: 13,
  },
  damageItem: {
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
  damageCarFullList: {
    width: ( WIDTH - ( PADDING_HORIZONTAL * 2 ) ),
    minHeight: 50,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
    paddingLeft: 11,
    paddingRight: 18,
    paddingTop: 12,
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
  bodyPartItem: {
    width: ( WIDTH - ( PADDING_HORIZONTAL * 2 ) ),
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 6,
  },
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 13,
  },
} );

export default TradeInCarDescription;