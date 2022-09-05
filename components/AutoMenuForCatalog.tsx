import React from 'react';
import { View } from 'react-native';
import NavbarCatalog from './NavbarCatalog';
import FiltersForCatalog from './FiltersForCatalog';
import ProfitableOffers from './ProfitableOffers';

const AutoMenuForCatalog = () => {
  return (
    <View>
      <FiltersForCatalog/>
      <ProfitableOffers/>
    </View>
  );
};

export default AutoMenuForCatalog;