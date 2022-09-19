import React from 'react';
import { Dimensions, FlatList, ListRenderItem, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import NavigateMenu from '../components/NavigateMenu';
import MyBaseSvg from '../svg/MyBaseSvg';
import MyArrowRightSvg from '../svg/MyArrowRightSvg';
import { useNavigation } from '@react-navigation/native';

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

const TradeInChoiceModelPage = () => {
  const navigation = useNavigation();
  const onModelClick = () => {
    navigation.navigate( 'Trade-in описание автомобиля' );
  };
  const renderModels: ListRenderItem<ModelType> = ( { item } ) => {
    return <View style={ styles.modelItem }>
      <View style={ {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      } }>
        <MyBaseSvg style={ styles.baseIcon }/>
        <Text style={ [ styles.text, styles.thinText ] }>{ item.name }</Text>
      </View>
      <MyArrowRightSvg style={ styles.arrowRight }/>
    </View>;
  };
  return (
    <View style={ styles.container }>
      <NavigateMenu navName={ 'Модель' } screen={ 'Trade-in выбор бренда' }/>
      <TextInput
        style={ styles.input }
        onChangeText={ () => {
        } }
        value={ '' }
        placeholder="Поиск"
      />
      <Pressable onPress={ onModelClick }>
        <FlatList
          data={ models }
          renderItem={ renderModels }
          scrollEnabled={ false }
        />
      </Pressable>
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