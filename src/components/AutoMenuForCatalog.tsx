import React from 'react';
import { View } from 'react-native';
import FiltersForCatalog from './FiltersForCatalog';
import ProfitableOffers from './ProfitableOffers';

const AutoMenuForCatalog = () => {
  return (
    <View style={ { display: 'flex', flexDirection: 'column', alignItems: 'center' } }>
      <FiltersForCatalog/>
      <ProfitableOffers/>
    </View>
  );
};

export default AutoMenuForCatalog;