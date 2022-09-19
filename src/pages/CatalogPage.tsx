import React, { useState } from 'react';
import NavbarCatalog from '../components/NavbarCatalog';
import ServicesMenuForCatalog from '../components/ServicesMenuForCatalog';
import { ScrollView, StyleSheet, View } from 'react-native';
import LoginBlock from '../components/LoginBlock';
import AutoMenuForCatalog from '../components/AutoMenuForCatalog';

const PADDING_HORIZONTAL = 13;
export const CatalogPage = () => {
  const isAuth = false;
  const [ selectMenu, setSelectMenu ] = useState( 'services' ); //позже в глобальном хранилище
  const setMenuName = ( menuName: string ) => {
    setSelectMenu( menuName );
  };
  return (
    <ScrollView>
      { !isAuth && <LoginBlock/> }
      <View style={ styles.container }>
        <NavbarCatalog setMenuName={ setMenuName } selectMenu={ selectMenu }/>
        { selectMenu === 'services'
          ? <ServicesMenuForCatalog/>
          : <AutoMenuForCatalog/>
        }
      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    display: 'flex',
    paddingHorizontal: PADDING_HORIZONTAL,
    backgroundColor: '#f9f9fa',
  },
} );