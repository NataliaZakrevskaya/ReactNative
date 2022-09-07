import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const DiscountsInfo = () => {
  return (
    <View style={ { marginTop: 14 } }>
      <Text style={ [ styles.text, styles.mainText, { marginBottom: 11 } ] }>Акции</Text>
      <Image
        style={ styles.discountImage }
        source={ {
          uri: 'https://time.com/nextadvisor/wp-content/uploads/2022/03/Male-female-credit-card-survey.jpg',
        } }
      />
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
  discountImage: {
    width: 333,
    height: 187,
    borderRadius: 8,
    resizeMode: 'cover',
  },
} );

export default DiscountsInfo;