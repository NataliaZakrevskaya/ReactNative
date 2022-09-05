import React from 'react';
import { View } from 'react-native';
import ProfileInfo from '../components/ProfileInfo';
import BonusesLink from '../components/BonusesLink';
import GarageInfo from '../components/GarageInfo';
import ServicesMenuForProfile from '../components/ServicesMenuForProfile';
import PersonalOffers from '../components/PersonalOffers';

const ProfilePage = () => {
  return (
    <View>
      <ProfileInfo/>
      <BonusesLink/>
      <GarageInfo/>
      <ServicesMenuForProfile/>
      <PersonalOffers/>
    </View>
  );
};

export default ProfilePage;