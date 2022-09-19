import React from 'react';
import { Alert, Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import MyNotificationSvg from '../svg/MyNotificationSvg';
import MyArrowSvg from '../svg/MyArrowSvg';
import MyEllipseSvg from '../svg/MyEllipseSvg';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get( 'screen' );
export const WIDTH = width;

const ProfileInfo = () => {
  const navigation = useNavigation();
  const notifications = true;
  return (
    <View style={ {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 19,
    } }>
      <View style={ styles.textContainer }>
        <Text style={ [ styles.text, styles.mainText ] }>Иванов Иван</Text>
        <Pressable onPress={ () => Alert.alert( 'Выбор города' ) }>
          <View style={ { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' } }>
            <Text style={ [ styles.text, styles.cityName ] }>Магнитогорск</Text>
            <MyArrowSvg style={ styles.arrow }/>
          </View>
        </Pressable>
      </View>
      <View style={ { display: 'flex', flexDirection: 'row', alignItems: 'center' } }>
        <Pressable onPress={ () => navigation.navigate( 'Уведомления' ) }>
          <View style={ { position: 'relative' } }>
            { notifications && <MyEllipseSvg style={ styles.ellipse }/> }
            <MyNotificationSvg style={ styles.notificationLogo }/>
          </View>
        </Pressable>
        <Pressable onPress={ () => navigation.navigate( 'Редактирование профиля' ) }>
          <Image
            style={ styles.profileIcon }
            source={ {
              uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
            } }
          />
        </Pressable>
      </View>
    </View>
  )
    ;
};

const styles = StyleSheet.create( {
    ellipse: {
      position: 'absolute',
      top: 0,
      right: 7,
      zIndex: 2,
    },
    notificationLogo: {
      marginRight: 8,
    },
    profileIcon: {
      width: 44,
      height: 44,
    },
    text: {
      fontFamily: 'Roboto',
      fontSize: 16,
      color: '#474747',
    },
    mainText: {
      fontWeight: '700',
      marginBottom: 8,
    },
    cityName: {
      fontWeight: '400',
      color: '#747474',
      marginRight: 4,
    },
    arrow: {
      width: 11.08,
      height: 6.72,
    },
    textContainer: {
      width: ( ( WIDTH / 3 ) * 2 ),
    },
  },
);

export default ProfileInfo;
