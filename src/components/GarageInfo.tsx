import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import AutoCard from './AutoCard';
import MyArrowRightSvg from '../svg/MyArrowRightSvg';
import { useNavigation } from '@react-navigation/native';

const GarageInfo = (props: any) => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable onPress={ () => navigation.navigate( 'Гараж' ) }>
        <View style={ { display: 'flex', flexDirection: 'row', alignItems: 'center' } }>
          <Text style={ [ styles.text, styles.mainText, { marginRight: 5, marginTop: 3 } ] }>
            Гараж
          </Text>
          <MyArrowRightSvg/>
        </View>
      </Pressable>
      <AutoCard openModal={props.openModal}/>
    </View>
  );
};

const styles = StyleSheet.create( {
  text: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#474747',
  },
  mainText: {
    fontWeight: '700',
    marginBottom: 8,
  },
} );
export default GarageInfo;