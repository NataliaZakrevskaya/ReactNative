import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, View } from 'react-native';
import ProfileInfo from '../components/ProfileInfo';
import BonusesLink from '../components/BonusesLink';
import GarageInfo from '../components/GarageInfo';
import ServicesMenuForProfile from '../components/ServicesMenuForProfile';
import PersonalOffers from '../components/PersonalOffers';
import AuthorizationPage from './AuthorizationPage';
import ChooseServiceModal from '../components/ChooseServiceModal';

const PADDING_HORIZONTAL = 13;
const ProfilePage = ( { navigation }: any ) => {
  const isAuth = true;
  const onBonusesClick = () => {
    navigation.navigate( 'Подарки за баллы' );
  };
  const [ modalVisible, setModalVisible ] = useState( false );
  const openModal = () => {
    setModalVisible( true );
  };
  const closeModal = () => {
    setModalVisible( false );
  };
  return (
    <View style={ styles.container }>
      { isAuth
        ? ( <View>
          <ProfileInfo/>
          <Pressable onPress={ onBonusesClick }>
            <BonusesLink/>
          </Pressable>
          <GarageInfo openModal={openModal}/>
          <ServicesMenuForProfile/>
          <PersonalOffers/>
        </View> )
        : <AuthorizationPage/>
      }
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
    </View>
  );
};
export default ProfilePage;

const styles = StyleSheet.create( {
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    display: 'flex',
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingTop: 20,
    backgroundColor: '#f9f9fa',
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#474747',
  },
  mainText: {
    fontWeight: '700',
    marginBottom: 8,
  },
  loginButton: {
    backgroundColor: '#07A95B',
    paddingTop: 8,
    paddingBottom: 1,
    borderRadius: 4,
    marginTop: 9,
    display: 'flex',
    alignItems: 'center',
  },
} );