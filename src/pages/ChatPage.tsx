import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import MyDoneSvg from '../svg/MyDoneSvg';
import MyPlusForMessageSvg from '../svg/MyPlusForMessageSvg';
import MySendMessageSvg from '../svg/MySendMessageSvg';

const { width } = Dimensions.get( 'screen' );
const WIDTH = width;
const PADDING_HORIZONTAL = 13;
export const ChatPage = () => {
  const [ text, setText ] = useState( 'Замечательно! Спасибо!' );
  const onInputChange = ( text: string ) => {
    setText( text );
  };
  return (
    <View style={ styles.container }>
      <View style={ styles.userMessageContainer }>
        <View style={ styles.userContainerForHours }>
          <View style={ { position: 'relative' } }>
            <View style={ styles.userMessage }>
              <Text style={ [ styles.text, { color: '#595F69' } ] }>Добрый день, мой автомобиль странно себя ведет,
                вчера
                горела красная лампочка,
                а сегодня он не
                заводится</Text>
              <MyDoneSvg width={ 14.4 } height={ 11.05 }/>
            </View>
            <View style={ styles.userHook }/>
            <View style={ styles.userShadow }/>
          </View>
          <Text style={ [ styles.text, { fontSize: 12, color: '#8A9099', marginLeft: 8 } ] }>1 day ago</Text>
        </View>
      </View>
      <View style={ styles.dcMessageContainer }>
        <View style={ styles.dcContainerForHours }>
          <View style={ { position: 'relative' } }>
            <View style={ styles.dcMessage }>
              <Text style={ [ styles.text, { color: '#fff' } ] }>Добрый день, Иван! Скажите где находится автомобиль и
                мы вышлем к вам специалиста для решения проблемы</Text>
            </View>
            <View style={ styles.dcHook }/>
            <View style={ styles.dcShadow }/>
          </View>
          <Text style={ [ styles.text, { fontSize: 12, color: '#8A9099', marginRight: 8 } ] }>1 min ago</Text>
        </View>
      </View>
      <View style={ styles.userMessageContainer }>
        <View style={ styles.userContainerForHours }>
          <View style={ { position: 'relative' } }>
            <View style={ styles.userMessage }>
              <Text style={ [ styles.text, { color: '#595F69' } ] }>Я нахожусь на Ленина 83, рядом с заправкой</Text>
              <MyDoneSvg width={ 14.4 } height={ 11.05 }/>
            </View>
            <View style={ styles.userHook }/>
            <View style={ styles.userShadow }/>
          </View>
          <Text style={ [ styles.text, { fontSize: 12, color: '#8A9099', marginLeft: 8 } ] }>1 min ago</Text>
        </View>
      </View>
      <View style={ styles.dcMessageContainer }>
        <View style={ styles.dcContainerForHours }>
          <View style={ { position: 'relative' } }>
            <View style={ styles.dcMessage }>
              <Text style={ [ styles.text, { color: '#fff' } ] }>Отлично, ожидайте! Помощь будет у вас через 12
                минут</Text>
            </View>
            <View style={ styles.dcHook }/>
            <View style={ styles.dcShadow }/>
          </View>
          <Text style={ [ styles.text, { fontSize: 12, color: '#8A9099', marginRight: 8 } ] }>1 min ago</Text>
        </View>
      </View>
      <View style={ styles.addMessageBlock }>
        <MyPlusForMessageSvg/>
        <TextInput
          value={ text }
          onChangeText={ onInputChange }
          placeholder="Номер телефона"
          style={ styles.input }/>
        <MySendMessageSvg/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create( {
  container: {
    backgroundColor: '#f9f9fa',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: WIDTH,
    paddingTop: 20,
    position: 'relative',
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 15,
    color: '#474747',
    lineHeight: 18.29,
    fontWeight: '500',
  },
  userMessageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: WIDTH,
    marginBottom: 10,
  },
  dcMessageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: WIDTH,
  },
  userContainerForHours: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  dcContainerForHours: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },

  userMessage: {
    maxWidth: 320,
    paddingVertical: 10,
    paddingHorizontal: 11,
    backgroundColor: '#fff',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    marginRight: 8,
    borderColor: '#E8E9EB',
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  dcMessage: {
    maxWidth: 320,
    paddingVertical: 10,
    paddingHorizontal: 18,
    backgroundColor: '#07A95B',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    marginLeft: 8,
  },
  userHook: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    width: 15,
    height: 10,
    borderBottomColor: '#E8E9EB',
    borderBottomWidth: 1,
  },
  dcHook: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#07A95B',
    width: 15,
    height: 20,
  },
  userShadow: {
    position: 'absolute',
    bottom: 1,
    right: 0,
    backgroundColor: '#f5f5f5',
    width: 9,
    height: 30,
    borderColor: '#E8E9EB',
    borderBottomLeftRadius: 10,
    borderWidth: 1,
    borderTopWidth: 0,
  },
  dcShadow: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#f5f5f5',
    width: 8,
    height: 30,
    borderColor: '#E8E9EB',
    borderBottomRightRadius: 10,
  },
  addMessageBlock: {
    width: WIDTH,
    height: 56,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 10,
  },
  input: {
    width: 277,
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: '#F7F7FC',
    marginLeft: 12,
    marginRight: 12,
  },
} );
