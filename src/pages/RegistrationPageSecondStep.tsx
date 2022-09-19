import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MyDoneSvg from '../svg/MyDoneSvg';

const { width } = Dimensions.get( 'screen' );
const WIDTH = width;
const PADDING_HORIZONTAL = 13;
const RegistrationPageSecondStep = () => {

  const navigation = useNavigation();
  const [ phoneNumber, setPhoneNumber ] = React.useState( '' );
  const [ isSelected, setIsSelected ] = React.useState( false );

  const onPhoneNumberInputChange = ( text: string ) => {
    setPhoneNumber( text );
  };
  const onCheckBoxClick = () => {
    setIsSelected( !isSelected );
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
          value={ phoneNumber }
          onChangeText={ onPhoneNumberInputChange }
          placeholder="Номер телефона"
          style={ styles.input }/>
        <View
          style={ { position: 'relative', marginTop: 8, display: 'flex', flexDirection: 'row', alignItems: 'center' } }>
          <Pressable onPress={ onCheckBoxClick }>
            <View style={ styles.checkbox }/>
          </Pressable>
          { isSelected && <MyDoneSvg style={ styles.done }/> }
          <Text style={ [ styles.text, { fontSize: 12, color: '#BFBFBF' } ] }>Согласие на обработку персональных
            данных</Text>
        </View>
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
  checkbox: {
    width: 20,
    height: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(7, 169, 91, 0.2)',
    borderRadius: 5,
    marginRight: 5,
  },
  done: {
    position: 'absolute',
    zIndex: 2,
    left: 2,
    bottom: 2,
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

export default RegistrationPageSecondStep;