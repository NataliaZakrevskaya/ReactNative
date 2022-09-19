import React, { useState } from 'react';
import { Dimensions, Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import NavigateMenu from '../components/NavigateMenu';
import GettingServiceModal from '../components/GettingServiceModal';
import GettingTestDriveModal from '../components/GettingTestDriveModal';

const { height, width } = Dimensions.get( 'screen' );
const WIDTH = width;
const HEIGHT = height;
const PADDING_HORIZONTAL = 13;

const TestDrivePage = () => {
  const [ modalVisible, setModalVisible ] = useState( false );
  const openModal = () => {
    setModalVisible( true );
  };
  const closeModal = () => {
    setModalVisible( false );
  };
  const carName = 'Ford Focus III ';
  return (
    <View style={ styles.container }>
      <View>
        <NavigateMenu navName={ 'Ford Focus III ' } screen={ 'Каталог' }/>
        <Image
          style={ styles.autoImage }
          source={ {
            uri: 'https://www.enterprise.com/content/dam/global-vehicle-images/cars/FORD_FUSION_2020.png',
          } }
        />
        <Text style={ [ styles.text, styles.mainText, { marginBottom: 12 } ] }>{ carName }</Text>
        <Text style={ [ styles.text, styles.thinText ] }>Описание</Text>
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
        bottom: 70,
      } }>
        <Pressable onPress={ openModal }>
          <View style={ {
            backgroundColor: '#07A95B',
            width: 207,
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
              } ] }>Записаться на тест-драйв</Text>
          </View>
        </Pressable>
        <Text style={ [ styles.text, styles.mainText, {
          fontSize: 14,
          lineHeight: 16,
          color: '#474747',
        } ] }>890 000 ₽ </Text>
      </View>
        <View style={ styles.centeredView }>
          <Modal
            animationType="none"
            transparent={ true }
            visible={ modalVisible }
            onRequestClose={ () => {
              setModalVisible( !modalVisible );
            } }
          >
            <GettingTestDriveModal closeModal={ closeModal }/>
          </Modal>
        </View>
    </View>
  );
};

const styles = StyleSheet.create( {
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: PADDING_HORIZONTAL,
    backgroundColor: '#f9f9fa',
    height: HEIGHT,
    display: 'flex',
    flexDirection: 'column',
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
export default TestDrivePage;