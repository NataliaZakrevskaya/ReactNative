import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import NavigateMenu from '../components/NavigateMenu';
import MyWrenchIcon from '../svg/MyWrenchIcon';
import MyArrowRightSvg from '../svg/MyArrowRightSvg';

const { height, width } = Dimensions.get( 'screen' );
const WIDTH = width;
const HEIGHT = height;
const PADDING_HORIZONTAL = 13;
const DocumentPage = () => {
  return (
    <View style={ styles.container }>
      <NavigateMenu navName={ 'Документы' } screen={ 'Гараж' }/>
      <View style={ {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 23,
      } }>
        <View style={ styles.serviceItem }>
          <View style={ {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          } }>
            <MyWrenchIcon style={ styles.wrenchIcon }/>
            <Text>ЭПТС</Text>
          </View>
          <MyArrowRightSvg style={ styles.arrowRight }/>
        </View>
        <View style={ styles.serviceItem }>
          <View style={ {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          } }>
            <MyWrenchIcon style={ styles.wrenchIcon }/>
            <Text>ОСАГО</Text>
          </View>
          <MyArrowRightSvg style={ styles.arrowRight }/>
        </View>
        <View style={ styles.serviceItem }>
          <View style={ {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          } }>
            <MyWrenchIcon style={ styles.wrenchIcon }/>
            <Text>КАСКО</Text>
          </View>
          <MyArrowRightSvg style={ styles.arrowRight }/>
        </View>
        <View style={ styles.serviceItem }>
          <View style={ {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          } }>
            <MyWrenchIcon style={ styles.wrenchIcon }/>
            <Text>ТО</Text>
          </View>
          <MyArrowRightSvg style={ styles.arrowRight }/>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create( {
  container: {
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingTop: 15,
    backgroundColor: '#f9f9fa',
    height: HEIGHT,
  },
  serviceItem: {
    backgroundColor: '#fff',
    marginBottom: 8,
    width: ( WIDTH - ( PADDING_HORIZONTAL * 2 ) ),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 17,
    paddingLeft: 13.79,
    paddingRight: 13.79,
    paddingBottom: 17,
    borderRadius: 8,
    borderColor: '#E8E9EB',
    borderWidth: 1,
  },
  wrenchIcon: {
    width: 25.38,
    height: 24,
    marginRight: 10.57,
  },
  arrowRight: {
    height: 14,
    width: 8.97,
  },
} );
export default DocumentPage;