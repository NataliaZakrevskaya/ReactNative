import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import MyNotificationSvg from '../svg/MyNotificationSvg';
import MyArrowSvg from '../svg/MyErrowSvg';
import MyEllipseSvg from '../svg/MyEllipseSvg';

const { height, width } = Dimensions.get( 'screen' );
export const WIDTH = width;

const ProfileInfo = () => {
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
        <View style={ { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' } }>
          <Text style={ [ styles.text, styles.cityName ] }>Магнитогорск</Text>
          <MyArrowSvg/>
        </View>
      </View>
      <View style={ { display: 'flex', flexDirection: 'row', alignItems: 'center' } }>
        <View style={ { position: 'relative' } }>
          <MyEllipseSvg style={ styles.ellipse }/>
          <MyNotificationSvg style={ styles.notificationLogo }/>
        </View>
        <Image
          style={ styles.profileIcon }
          source={ {
            uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
          } }
        />
      </View>
    </View>
  );
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
