import React, { useState } from 'react';
import { Dimensions, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get( 'screen' );
export const WIDTH = width;
const PADDING_HORIZONTAL = 13;

const EditNamePage = () => {
  const navigation = useNavigation();
  const [ text, setText ] = useState( '' );
  const onInputChange = ( text: string ) => {
    setText( text );
  };
  return (
    <View style={ styles.container }>
      <View style={ styles.oldNameBlock }>
        <Text style={ [ styles.text, { color: '#07A95B', marginLeft: 7 } ] }>Текущие Имя Фамилия</Text>
        <Text style={ [ styles.text, { color: '#BFBFBF', marginRight: 8 } ] }>Иван Иванов</Text>
      </View>
      <View style={ {
        backgroundColor: '#fff',
        /*height: 50,*/
        paddingLeft: 11.84,
        paddingTop: 12,
        paddingBottom: 12,
        paddingRight: 11.84,
        width: WIDTH - ( PADDING_HORIZONTAL * 2 ),
        borderRadius: 8,
        borderColor: '#E8E9EB',
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      } }>
        <Text style={ [ styles.text, { color: '#07A95B', marginLeft: 7 } ] }>Новые Имя Фамилия</Text>
        <TextInput
          value={ text }
          onChangeText={ onInputChange }
          placeholder="Иван Иванов"
          style={ styles.input }/>
      </View>
      <Pressable
        style={ ( { pressed } ) => [ styles.loginButton ] }
        onPress={ () => { // @ts-ignore
          navigation.navigate( 'Редактирование профиля' );
        } }
      >
        <Text
          style={ [ styles.text, styles.mainText, {
            fontSize: 16,
            color: 'white',
          } ] }>Подтвердить</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: PADDING_HORIZONTAL,
    backgroundColor: '#f9f9fa',
    width: WIDTH,
    paddingTop: 20,
  },
  oldNameBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: WIDTH - ( PADDING_HORIZONTAL * 2 ),
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 10,
    borderColor: '#E8E9EB',
    borderWidth: 1,
    marginBottom: 8,
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: '#474747',
  },
  input: {
    backgroundColor: '#fff',
    fontSize: 14,
    fontWeight: '400',
    color: '#BFBFBF',
  },
  mainText: {
    fontWeight: '700',
  },
  loginButton: {
    backgroundColor: '#07A95B',
    paddingTop: 15.95,
    paddingBottom: 15.05,
    borderRadius: 4,
    marginTop: 9,
    display: 'flex',
    alignItems: 'center',
    width: WIDTH - ( PADDING_HORIZONTAL * 2 ),
  },
} );

export default EditNamePage;