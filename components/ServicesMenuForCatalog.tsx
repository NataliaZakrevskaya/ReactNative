import React from 'react';
import { View } from 'react-native';
import ServicesList from './ServicesList';
import SpecialOffer from './SpecialOffer';

const ServicesMenuForCatalog = () => {
  return (
    <View>
      <ServicesList/>
      <SpecialOffer/>
    </View>
  );
};

export default ServicesMenuForCatalog;