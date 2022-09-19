import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import NavigateMenu from '../components/NavigateMenu';
import MyArrowRightSvg from '../svg/MyArrowRightSvg';

const { width } = Dimensions.get( 'screen' );
const WIDTH = width;
const PADDING_HORIZONTAL = 13;
const NotificationsPage = () => {
  return (
    <View style={ styles.container }>
      <NavigateMenu navName={ 'Уведомления' } screen={ 'Профиль' }/>
      <View style={ styles.notificationsContainer }>
        <View style={ styles.notification }>
          <Text style={ [ styles.text, styles.mainText, { marginBottom: 5 } ] }>У вас сегодня запись в сервис</Text>
          <Text style={ [ styles.text, styles.thinText, { fontSize: 12, marginBottom: 4 } ] }>Добрый день! Ожидаем вас
            сегодня в 9:30 в сервисе, вход со двора красные ворота</Text>
          <View style={ styles.detailsBtn }>
            <Text style={ [ styles.text, styles.thinText, { fontSize: 12, marginRight: 4 } ] }>Подробнее</Text>
            <MyArrowRightSvg/>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create( {
  container: {
    flex: 1,
    display: 'flex',
    paddingHorizontal: PADDING_HORIZONTAL,
    backgroundColor: '#f9f9fa',
  },
  notificationsContainer: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  notification: {
    width: WIDTH - ( PADDING_HORIZONTAL * 2 ),
    height: 94,
    backgroundColor: '#fff',
    paddingTop: 11,
    paddingBottom: 7,
    paddingHorizontal: 12,
    borderColor: '#E8E9EB',
    borderWidth: 0.5,
    borderRadius: 8,
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#474747',
  },
  mainText: {
    fontWeight: '700',
  },
  thinText: {
    fontWeight: '400',
    fontSize: 14,
  },
  detailsBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
} );
export default NotificationsPage;