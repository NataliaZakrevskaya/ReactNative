import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MyNotificationSvg from '../svg/MyNotificationSvg';
import MyEllipseSvg from '../svg/MyEllipseSvg';

const { width } = Dimensions.get( 'screen' );
const WIDTH = width;
const PADDING_HORIZONTAL = 13;

const LoginBlock = () => {
  const navigation = useNavigation();
  const notifications = true;
  return (
    <View style={ styles.container }>
      <View style={ styles.content }>
        <Pressable style={ ( { pressed } ) => [ styles.loginButton ] } onPress={ () => navigation.navigate( 'Логин' ) }>
          <Text
            style={ [ styles.text, styles.mainText, { fontSize: 16, color: 'white' } ] }>Войти</Text>
        </Pressable>
        <View style={ { position: 'relative' } }>
          { notifications && <MyEllipseSvg style={ styles.ellipse }/> }
          <MyNotificationSvg style={ styles.notificationLogo }/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create( {
  container: {
    marginTop: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: WIDTH,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: WIDTH - ( PADDING_HORIZONTAL * 2 ),
  },
  text: {
    fontFamily: 'Roboto',
  },
  mainText: {
    fontWeight: '700',
  },
  loginButton: {
    backgroundColor: '#07A95B',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 118,
    paddingRight: 118,
    borderRadius: 4,
  },
  ellipse: {
    position: 'absolute',
    top: 0,
    right: 7,
    zIndex: 2,
  },
  notificationLogo: {
    marginRight: 8,
  },
} );

export default LoginBlock;