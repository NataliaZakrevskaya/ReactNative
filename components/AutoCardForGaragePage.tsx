import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const { height, width } = Dimensions.get( 'screen' );
export const WIDTH = width;
const PADDING_HORIZONTAL = 13;

const AutoCardForGaragePage = () => {
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
      <View style={ {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      } }>
        <Image
          style={ styles.groupMenu }
          source={ require( '@expo/assets/groupMenu.png' ) }
        />
        <Image
          style={ styles.autoImage }
          source={ require( '@expo/assets/carImage.png' ) }
        />
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
  groupMenu: {
    height: 11,
    width: 3,
    marginBottom: 19,
  },
} );

export default AutoCardForGaragePage;