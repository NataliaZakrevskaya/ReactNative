
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
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
          <Image
            style={ styles.arrow }
            source={ require( '@expo/assets/arrow.png' ) }/>
        </View>
      </View>
      <View style={ { display: 'flex', flexDirection: 'row', alignItems: 'center' } }>
        <View style={ { position: 'relative' } }>
          <Image
            style={ styles.ellipse }
            source={ require( '@expo/assets/ellipse.png' ) }/>
          <Image
            style={ styles.notificationLogo }
            source={ require( '@expo/assets/notification.png' ) }
          />
        </View>
        <Image
          style={ styles.profileIcon }
          source={ require( '@expo/assets/profileIcon.png' ) }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create( {
    ellipse: {
      position: 'absolute',
      width: 7,
      height: 7,
      top: 0,
      right: 7,
      zIndex: 2,
    },
    notificationLogo: {
      width: 16,
      height: 18.82,
      marginRight: 8
    },
    profileIcon: {
      width: 44,
      height: 44
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
      width: ((WIDTH / 3) * 2)
    }
}
)

export default ProfileInfo;
