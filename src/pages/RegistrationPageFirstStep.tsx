import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get( 'screen' );
const WIDTH = width;
const PADDING_HORIZONTAL = 13;
const RegistrationPageFirstStep = () => {
  const navigation = useNavigation();
  const [ surname, setSurname ] = React.useState( '' );
  const [ name, setName ] = React.useState( '' );
  const onSurnameInputChange = ( text: string ) => {
    setSurname( text );
  };
  const onNameInputChange = ( text: string ) => {
    setName( text );
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
          value={ surname }
          onChangeText={ onSurnameInputChange }
          placeholder="Фамилия"
          style={ styles.input }/>
        <TextInput
          value={ name }
          onChangeText={ onNameInputChange }
          placeholder="Имя"
          style={ [ styles.input, { marginTop: 8 } ] }/>
        <Pressable
          style={ ( { pressed } ) => [ styles.loginButton ] }
          onPress={ () => { // @ts-ignore
            navigation.navigate( 'Регистрация2' );
          } }
        >
          <Text
            style={ [ styles.text, styles.mainText, {
              fontSize: 16,
              color: 'white',
            } ] }>Далее</Text>
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

export default RegistrationPageFirstStep;