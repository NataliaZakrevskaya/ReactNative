import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get( 'screen' );
const WIDTH = width;
const PADDING_HORIZONTAL = 13;
const GettingTestDriveModal = ( { closeModal }: any ) => {
  return (
    <View style={ styles.centeredView }>
      <View style={ styles.modalView }>
        <View>
          <Text style={ [ styles.text, styles.mainText, { textAlign: 'center', marginBottom: 20 } ] }>
            Для записи на тест-драйв
          </Text>
          <Text style={ [ styles.text, { marginBottom: 15, fontSize: 12 } ] }>1. Вам нужно связаться с сотрудником
            диллерского центра</Text>
          <Text style={ [ styles.text, { marginBottom: 24, fontSize: 12 } ] }>2. Сотрудник подскажет в какое время вы
            можете опробовать ваш будующий автомобиль</Text>
        </View>
        <View style={ {
          display: 'flex',
          flexDirection: 'row',
        } }>
          <View style={ {
            paddingVertical: 8,
            paddingLeft: 12,
            paddingRight: 11,
            backgroundColor: '#07A95B',
            borderRadius: 4,
            marginRight: 34,
          } }>
            <Text style={ [ styles.text, { fontSize: 14, fontWeight: '700', color: '#fff' } ] }>Позвонить</Text>
          </View>
          <View style={ {
            paddingVertical: 8,
            paddingLeft: 12,
            paddingRight: 11,
            backgroundColor: '#07A95B',
            borderRadius: 4,
          } }>
            <Text style={ [ styles.text, { fontSize: 14, fontWeight: '700', color: '#fff' } ] }>Написать нам</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create( {
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalView: {
    width: WIDTH - PADDING_HORIZONTAL,
    backgroundColor: 'white',
    borderRadius: 14,
    paddingTop: 15,
    paddingBottom: 20,
    paddingHorizontal: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#474747',
  },
  mainText: {
    fontWeight: '700',
  },
} );
export default GettingTestDriveModal;