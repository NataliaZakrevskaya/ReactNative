import React, { useState } from 'react';
import { Dimensions, Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import NavigateMenu from '../components/NavigateMenu';
import StitchesInfo from '../components/StitchesInfo';
import GettingServiceModal from '../components/GettingServiceModal';

const { width } = Dimensions.get( 'screen' );
const WIDTH = width;
const PADDING_HORIZONTAL = 13;

const BonusPage = () => {
  const serviceName = 'Услуга номер 1';
  const [ modalVisible, setModalVisible ] = useState( false );
  const openModal = () => {
    setModalVisible( true );
  };
  const closeModal = () => {
    setModalVisible( false );
  };
  return (
    <View style={ styles.container }>
      <View style={ {
        paddingHorizontal: PADDING_HORIZONTAL,
      } }>
        <NavigateMenu navName={ serviceName } screen={ 'Подарки за баллы' }/>
        <Image
          style={ styles.autoImage }
          source={ {
            uri: 'https://www.enterprise.com/content/dam/global-vehicle-images/cars/FORD_FUSION_2020.png',
          } }
        />
        <Text style={ [ styles.text, styles.mainText, { marginBottom: 12 } ] }>Любая услуга или товар добавленная
          сотрудником</Text>
        <Text style={ [ styles.text, styles.thinText, { fontSize: 12 } ] }>Полное описание подарочной акции </Text>
      </View>
      <View style={ {
        width: WIDTH,
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 13,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
      } }>
        <Pressable onPress={ openModal }>
          <View style={ {
            backgroundColor: '#07A95B',
            width: 95,
            height: 32,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
          } }>
            <Text
              style={ [ styles.text, styles.mainText, {
                fontSize: 14,
                lineHeight: 16,
                color: '#fff',
              } ] }>Получить</Text>
          </View>
        </Pressable>
        <StitchesInfo stitchesCount={ 340 }/>
      </View>
      { modalVisible &&
        <View style={ styles.centeredView }>
          <Modal
            animationType="none"
            transparent={ true }
            visible={ modalVisible }
            onRequestClose={ () => {
              setModalVisible( !modalVisible );
            } }
          >
            <GettingServiceModal closeModal={ closeModal }/>
          </Modal>
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create( {
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#f9f9fa',
    position: 'relative',
  },
  backIcon: {
    width: 24,
    height: 24,
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
  autoImage: {
    width: ( WIDTH - ( PADDING_HORIZONTAL * 2 ) ),
    height: 264,
    resizeMode: 'contain',
  },
} );

export default BonusPage;