import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get( 'screen' );
const WIDTH = width;
const PADDING_HORIZONTAL = 13;
const ChooseServiceModal = ( { closeModal }: any ) => {
  return (
    <View style={ styles.centeredView }>
      <View style={ styles.modalView }>
        <View style={ {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderBottomWidth: 0.5,
          borderBottomColor: '#ccc',
          width: WIDTH - PADDING_HORIZONTAL,
          paddingBottom: 12,
        } }>
          <Text style={ [ styles.text, {
            fontWeight: '700',
            fontSize: 14,
            lineHeight: 16,
            color: '#000',
            marginBottom: 5,
          } ] }>Выберите тип предпологаемой услуги</Text>
          <Text style={ [ styles.text, { color: '#8a8a8e', fontSize: 14, lineHeight: 16, textAlign: 'center' } ] }>Это
            поможет нам быстрее закрыть вашу потребность</Text>
        </View>
        <View style={ {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderBottomWidth: 0.5,
          borderBottomColor: '#ccc',
          width: WIDTH - PADDING_HORIZONTAL,
          paddingBottom: 16,
          paddingTop: 15,
        } }>
          <Text style={ [ styles.text, { color: '#000', fontSize: 20, lineHeight: 24 } ] }>ТО</Text>
        </View>
        <View style={ {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderBottomWidth: 0.5,
          borderBottomColor: '#ccc',
          width: WIDTH - PADDING_HORIZONTAL,
          paddingBottom: 16,
          paddingTop: 15,
        } }>
          <Text style={ [ styles.text, { color: '#000', fontSize: 20, lineHeight: 24 } ] }>ТО - 0</Text>
        </View>
        <View style={ {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderBottomWidth: 0.5,
          borderBottomColor: '#ccc',
          width: WIDTH - PADDING_HORIZONTAL,
          paddingBottom: 16,
          paddingTop: 15,
        } }>
          <Text style={ [ styles.text, { color: '#000', fontSize: 20, lineHeight: 24 } ] }>Диагностика</Text>
        </View>
        <View style={ {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderBottomWidth: 0.5,
          borderBottomColor: '#ccc',
          width: WIDTH - PADDING_HORIZONTAL,
          paddingBottom: 16,
          paddingTop: 15,
        } }>
          <Text style={ [ styles.text, { color: '#000', fontSize: 20, lineHeight: 24 } ] }>Сервисные компании</Text>
        </View>
        <View style={ {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: WIDTH - PADDING_HORIZONTAL,
          paddingBottom: 16,
          paddingTop: 15,
          borderBottomWidth: 0.5,
          borderBottomColor: '#ccc',
        } }>
          <Text style={ [ styles.text, { color: '#000', fontSize: 20, lineHeight: 24 } ] }>Ремонт</Text>
        </View>
        <View style={ {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: WIDTH - PADDING_HORIZONTAL,
          paddingBottom: 16,
          paddingTop: 15,
          borderBottomWidth: 0.5,
          borderBottomColor: '#ccc',
        } }>
          <Text style={ [ styles.text, { color: '#000', fontSize: 20, lineHeight: 24 } ] }>Кузовные работы</Text>
        </View>
        <View style={ {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: WIDTH - PADDING_HORIZONTAL,
          paddingBottom: 16,
          paddingTop: 15,
        } }>
          <Text style={ [ styles.text, { color: '#000', fontSize: 20, lineHeight: 24 } ] }>...</Text>
        </View>
      </View>
      <Pressable onPress={ closeModal }>
        <View style={ [ styles.modalView, { paddingBottom: 15 } ] }>
          <Text
            style={ [ styles.text, { color: '#000', fontSize: 20, lineHeight: 24, fontWeight: '700' } ] }>Cancel</Text>
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create( {
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalView: {
    width: WIDTH - PADDING_HORIZONTAL,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 17,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 7,
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#474747',
  },
} );

export default ChooseServiceModal;