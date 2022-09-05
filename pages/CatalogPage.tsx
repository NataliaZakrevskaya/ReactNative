import React from 'react';
import NavbarCatalog from '../components/NavbarCatalog';
import AutoMenuForCatalog from '../components/AutoMenuForCatalog';
import ServicesMenuForCatalog from '../components/ServicesMenuForCatalog';
import { StyleSheet, View } from 'react-native';

const PADDING_HORIZONTAL = 13;

const CatalogPage = () => {
  return (
    <View style={ styles.container }>
      <NavbarCatalog/>
      {/*<AutoMenuForCatalog/>*/}
      <ServicesMenuForCatalog/>
    </View>
  );
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    /*paddingVertical: 42,*/
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
} );

export default CatalogPage;