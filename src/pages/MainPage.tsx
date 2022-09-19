import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, View } from 'react-native';
import ProfileInfo from '../components/ProfileInfo';
import GarageInfo from '../components/GarageInfo';
import UsefulInfo from '../components/UsefulInfo';
import DiscountsInfo from '../components/DiscountsInfo';
import LoginBlock from '../components/LoginBlock';
import GettingTestDriveModal from '../components/GettingTestDriveModal';
import ChooseServiceModal from '../components/ChooseServiceModal';

const PADDING_HORIZONTAL = 13;

export const MainPage = ( { navigation }: any ) => {
  const isAuth = true;
  const [ modalVisible, setModalVisible ] = useState( false );
  const openModal = () => {
    setModalVisible( true );
  };
  const closeModal = () => {
    setModalVisible( false );
  };
  return (
    <ScrollView>
      { !isAuth && <LoginBlock/> }
      <ScrollView style={ styles.container }>
        { isAuth &&
          <View>
            <ProfileInfo/>
            <GarageInfo openModal={ openModal }/>
          </View>
        }
        <UsefulInfo/>
        <DiscountsInfo/>
        <View style={ styles.centeredView }>
          <Modal
            animationType="none"
            transparent={ true }
            visible={ modalVisible }
            onRequestClose={ () => {
              setModalVisible( !modalVisible );
            } }
          >
            <ChooseServiceModal closeModal={ closeModal }/>
          </Modal>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create( {
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingHorizontal: PADDING_HORIZONTAL,
    display: 'flex',
    paddingTop: 10,
  },
} );

