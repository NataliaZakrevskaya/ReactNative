import React, { useState } from 'react';
import { Dimensions, FlatList, ListRenderItem, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import NavigateMenu from '../components/NavigateMenu';
import MyCheckboxSvg from '../svg/MyCheckboxSvg';
import MyBaseSvg from '../svg/MyBaseSvg';
import MyArrowRightSvg from '../svg/MyArrowRightSvg';
import MyDoneSvg from '../svg/MyDoneSvg';

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
  const [ editMode, setEditMode ] = useState( false );
  const [ vinInputValue, setVinInputValue ] = useState( '' );
  const [ mileageValue, setMileageValue ] = useState( '' );
  const [ uniqueValue, setUniqueValue ] = useState( '' );
  const onTrashClick = () => {
    setEditMode( !editMode );
  };
  return (
    <View style={ styles.container }>
      <NavigateMenu navName={ 'Описание автомобиля' } screen={ 'Trade-in выбор модели' }/>
      <TextInput
        style={ [ styles.input, { marginTop: 21 } ] }
        onChangeText={ ( text ) => setVinInputValue( text ) }
        value={ vinInputValue }
        placeholder="VIN"
      />
      <TextInput
        style={ styles.input }
        onChangeText={ ( text ) => setMileageValue( text ) }
        value={ mileageValue }
        placeholder="Текущий пробег"
        keyboardType="numeric"
      />
      <TextInput
        multiline
        numberOfLines={ 10 }
        style={ styles.textarea }
        onChangeText={ ( text ) => setUniqueValue( text ) }
        value={ uniqueValue }
        placeholder="Укажите уникальные особенности вашего авто"
      />
      <View style={ styles.damageCarFullList }>
        <Pressable onPress={ onTrashClick }>
          <View style={ {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          } }>

            <View style={ {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            } }>
              <View style={ { position: 'relative' } }>
                <MyBaseSvg style={ styles.baseIcon }/>
                { editMode && <MyDoneSvg style={ { position: 'absolute', bottom: 2 } } width={ 25 } height={ 25 }/> }
              </View>
              <Text style={ [ styles.text, styles.thinText ] }>Повреждения автомобиля</Text>
            </View>
            <MyArrowRightSvg style={ styles.arrowRight }/>
          </View>
        </Pressable>
        { editMode &&
          <View>
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
              scrollEnabled={ false }
            />
          </View>
        }
      </View>
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