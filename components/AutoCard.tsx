import React from 'react';
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';

const { height, width } = Dimensions.get( 'screen' );
const WIDTH = width;
const PADDING_HORIZONTAL = 13;

const AutoCard = () => {
  return (
    <View style={ styles.autoContainer }>
      <View>
        <Text style={ [ styles.text, styles.mainText, { paddingBottom: 7 } ] }>Ford Focus III</Text>
        <Text style={ [ styles.text, styles.thinText ] }>VIN:
          <Text style={ [ styles.text, styles.mainText, { fontSize: 14 } ] }> X9FKXXEEBKCE88888</Text>
        </Text>
        <Text style={ [ styles.text, styles.thinText ] }>Пробег:
          <Text style={ [ styles.text, styles.mainText, { fontSize: 14 } ] }> 34 566 км</Text>
        </Text>
        <Text style={ [ styles.text, styles.thinText ] }>Следующий ТО:
          <Text style={ [ styles.text, styles.mainText, { fontSize: 14 } ] }> 24.09.2023</Text>
        </Text>
      </View>
      <View>
        <Image
          style={ styles.autoImage }
          source={{
            uri: 'https://www.enterprise.com/content/dam/global-vehicle-images/cars/FORD_FUSION_2020.png'
          }}
        />
        <Pressable style={ ( { pressed } ) => [
          {
            backgroundColor: '#07A95B',
            paddingTop: 8,
            paddingBottom: 1,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 4,
            marginTop: 9,
          },
        ] }>
          <Text style={ [ styles.text, styles.mainText, { fontSize: 14, color: 'white' } ] }>Записаться</Text>
        </Pressable>
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
    marginBottom: 8,
  },
  thinText: {
    fontWeight: '400',
    fontSize: 14,
  },
  autoContainer: {
    marginTop: 4,
    backgroundColor: '#fff',
    width: ( WIDTH - ( PADDING_HORIZONTAL * 2 ) ),
    height: 110,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingLeft: 13,
    paddingRight: 13,
    paddingBottom: 7,
    marginBottom: 15,
  },
  autoImage: {
    width: 104.36,
    height: 49,
  },
} );

export default AutoCard;