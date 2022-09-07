import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import NavigateMenu from '../components/NavigateMenu';

const { height, width } = Dimensions.get( 'screen' );
export const WIDTH = width;
const PADDING_HORIZONTAL = 13;

const TradeInResultPage = () => {
  const middleCost = '1 357 000';
  const dealerCost = '1 223 700';
  return (
    <View>
      <NavigateMenu navName={ 'Результат' }/>
      <View style={ {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      } }>
        <Image
          style={ styles.autoImage }
          source={ {
            uri: 'https://www.enterprise.com/content/dam/global-vehicle-images/cars/FORD_FUSION_2020.png',
          } }
        />
        <View style={ {
          display: 'flex',
          flexDirection: 'column',
          width: ( WIDTH - ( 29 * 2 ) ),
          marginTop: 17,
        } }>
          <Text style={ [ styles.text, styles.thinText, { fontSize: 12 } ] }>Средняя стоимость аналогичного
            автомобиля:</Text>
          <Text style={ [ styles.text, styles.mainText, {
            textAlign: 'center',
            marginTop: 12,
            marginBottom: 17,
          } ] }>{ middleCost } руб.</Text>
          <Text style={ [ styles.text, styles.thinText, { fontSize: 12 } ] }>С учетом особенностей вашего автомобиля мы
            готовы предложить вам за него</Text>
          <Text style={ [ styles.text, styles.mainText, {
            textAlign: 'center',
            marginTop: 12,
            marginBottom: 17,
          } ] }>{ dealerCost } руб.</Text>
          <Text style={ [ styles.text, styles.thinText, { fontSize: 12 } ] }>Для более детальной оценки вашего
            автомобиля вы можете проехать к нам и записаться на оценку авто, мы с радостью подберем для вас наилучший
            вариант продажи или обмена вашего авто.</Text>
        </View>
      </View>
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
  },
  thinText: {
    fontWeight: '400',
    fontSize: 14,
  },
  autoImage: {
    width: ( WIDTH - ( PADDING_HORIZONTAL * 2 ) ),
    height: 169,
    resizeMode: 'contain',
    marginTop: 17,
  },
} );

export default TradeInResultPage;