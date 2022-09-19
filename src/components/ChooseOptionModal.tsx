import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get( 'screen' );
const WIDTH = width;
const PADDING_HORIZONTAL = 13;
const ChooseOptionModal = ( props: any ) => {
  const navigation = useNavigation();
  const onDocumentClick = () => {
    navigation.navigate( 'Документы' );
    props.closeModal();
  };
  const onTradeInClick = () => {
    navigation.navigate( 'Trade-in выбор бренда' );
    props.closeModal();
  };
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
            fontWeight: '500',
            fontSize: 14,
            lineHeight: 16,
            color: '#000',
            marginBottom: 5,
          } ] }>Ford Focus III</Text>
          <Text style={ [ styles.text, { color: '#8a8a8e', fontSize: 14, lineHeight: 16 } ] }>Что нужно сделать
            для вашего автомобиля?</Text>
        </View>
        <Pressable onPress={ onDocumentClick }>
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
            <Text style={ [ styles.text, { color: '#000', fontSize: 20, lineHeight: 24 } ] }>Документы</Text>
          </View>
        </Pressable>
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
          <Text style={ [ styles.text, { color: '#000', fontSize: 20, lineHeight: 24 } ] }>Запись в сервис</Text>
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
        <Pressable onPress={ onTradeInClick }>
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
            <Text style={ [ styles.text, { color: '#000', fontSize: 20, lineHeight: 24 } ] }>Рассчитать Trade-In</Text>
          </View>
        </Pressable>
        <View style={ {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: WIDTH - PADDING_HORIZONTAL,
          paddingBottom: 16,
          paddingTop: 15,
        } }>
          <Text style={ [ styles.text, { color: '#CD6363', fontSize: 20, lineHeight: 24 } ] }>Удалить Автомобиль</Text>
        </View>
      </View>
      <Pressable onPress={ props.closeModal }>
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
    backgroundColor: 'rgba(0,0,0,0.01)',
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

export default ChooseOptionModal;