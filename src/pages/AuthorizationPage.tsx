import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get( 'screen' );
const WIDTH = width;
const PADDING_HORIZONTAL = 13;
const AuthorizationPage = () => {
  const navigation = useNavigation();
  const [ text, setText ] = React.useState( '' );
  const onInputChange = ( text: string ) => {
    setText( text );
  };
  return (
    <View style={ {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f9f9fa',
    } }>
      <View style={ {
        height: 300,
        marginTop: '60%',
      } }>
        <TextInput
          value={ text }
          onChangeText={ onInputChange }
          placeholder="Номер телефона"
          style={ styles.input }/>
        <Pressable
          style={ ( { pressed } ) => [ styles.loginButton ] }
          onPress={ () => { // @ts-ignore
            navigation.navigate( 'Главная' );
          } }
        >
          <Text
            style={ [ styles.text, styles.mainText, {
              fontSize: 16,
              color: 'white',
            } ] }>Войти</Text>
        </Pressable>
        <Pressable
          style={ ( { pressed } ) => [ styles.registration ] }
          onPress={ () => { // @ts-ignore
            navigation.navigate( 'Регистрация1' );
          } }
        >
          <Text
            style={ [ styles.text, styles.mainText, {
              fontSize: 16,
              color: '#07A95B',
              marginTop: 16,
            } ] }>Зарегистрироваться</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create( {
  container: {
    flex: 1,
    display: 'flex',
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingTop: 20,
  },
  input: {
    backgroundColor: '#fff',
    height: 50,
    paddingLeft: 11.84,
    paddingTop: 17,
    paddingBottom: 17,
    width: WIDTH - ( PADDING_HORIZONTAL ),
    fontSize: 14,
    fontWeight: '400',
    color: '#b7b7b7',
    lineHeight: 14,
    borderRadius: 8,
    borderColor: '#E8E9EB',
    borderWidth: 1,
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#474747',
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
  },
  registration: {
    width: WIDTH - PADDING_HORIZONTAL,
    display: 'flex',
    alignItems: 'center',
  },
} );

export default AuthorizationPage;