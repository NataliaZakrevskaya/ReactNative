import React, { useState } from 'react';
import { Alert, Dimensions, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import ProfileInfo from '../components/ProfileInfo';
import AutoCardForGaragePage from '../components/AutoCardForGaragePage';
import MyPlusIcon from '../svg/MyPlusIcon';
import ChooseOptionModal from '../components/ChooseOptionModal';

const { height, width } = Dimensions.get( 'screen' );
const WIDTH = width;
const HEIGHT = height;
const PADDING_HORIZONTAL = 13;
const GaragePage = () => {
  const [ modalVisible, setModalVisible ] = useState( false );
  const openModal = () => {
    setModalVisible( true );
  };
  const closeModal = () => {
    setModalVisible( false );
  };
  return (
    <View style={ styles.container }>
      <ProfileInfo/>
      <Text style={ [ styles.text, styles.mainText ] }>
        Гараж
      </Text>
      <AutoCardForGaragePage openModal={ openModal }/>
      <AutoCardForGaragePage openModal={ openModal }/>
      <Pressable onPress={ () => Alert.alert( 'Открывается окно для добавления машины ' ) }>
        <View style={ styles.addAutoBlock }>
          <Text style={ [ styles.text, styles.mainText, { color: `#919191`, marginTop: 15 } ] }>Добавить
            автомобиль</Text>
          <MyPlusIcon style={ styles.plusIcon }/>
        </View>
      </Pressable>
      <View style={ styles.centeredView }>
        <Modal
          animationType="none"
          transparent={ true }
          visible={ modalVisible }
          onRequestClose={ () => {
            setModalVisible( !modalVisible );
          } }
        >
          <ChooseOptionModal closeModal={ closeModal }/>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create( {
  container: {
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingTop: 15,
    height: HEIGHT,
    backgroundColor: '#f9f9fa',
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#474747',
  },
  mainText: {
    fontWeight: '700',
  },
  addAutoBlock: {
    width: ( WIDTH - ( PADDING_HORIZONTAL * 2 ) ),
    height: 91,
    backgroundColor: `#fff`,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E8E9EB',
    borderWidth: 0.5,
  },
  plusIcon: {
    width: 40,
    height: 40,
  },
  centeredView: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
} );

export default GaragePage;