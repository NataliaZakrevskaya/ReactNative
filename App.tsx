import { ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MainPage from './pages/MainPage';

const PADDING_HORIZONTAL = 13;

export default function App() {

  return (
    <ScrollView style={ styles.container }>
      <MainPage/>
      <StatusBar style="auto"/>
    </ScrollView>
  );
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingVertical: 42,
    display: 'flex',
  },
} );

/*type ArrDataType = {
  id: number,
  title: string
}*/

/*const arrData: ArrDataType[] = new Array( 100 ).fill( null ).map( ( _, index ) => ( {
  id: index + 1,
  title: `Title № ${ index + 1 }`,
} ) );
const render: ListRenderItem<ArrDataType> = ( { item } ) => {
  return <View style={ styles.item }>
    <Text style={ {
      color: 'white',
      fontSize: 22,
      fontWeight: '500',
    } }>{ item.title }</Text>
  </View>;
};*/

{/*<FlatList
        showsVerticalScrollIndicator={false}
        data={ arrData }
        renderItem={ render }
        columnWrapperStyle={{justifyContent: 'space-between'}}
        numColumns={2}
      />

      <Text>Open up App.tsx to start working on your app!</Text>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="small" color="#0000ff" />
      <ActivityIndicator size="large" color="#00ff00" />
      <Image
        style={{width: 100, height: 100}}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <TextInput
        style={styles.input}
        onChangeText={() => {}}
        value={'hello'}
      />
      <TouchableOpacity style={{paddingBottom: 50}}>
        <Text >123455injknkjn</Text>
      </TouchableOpacity>
      <TouchableHighlight style={{paddingBottom: 20}}>
        <Text>123455injknkjndvedsadc</Text>
      </TouchableHighlight>
      <TouchableWithoutFeedback>
        <Text>123455injkc</Text>
      </TouchableWithoutFeedback>
      <Pressable  style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? 'rgb(210, 230, 255)'
            : 'white'
        }
      ]}>
        <Text>I'm pressable!</Text>
      </Pressable>
      <StatusBar style="auto" />*/
}

/*
const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    /!* alignItems: 'center',
     justifyContent: 'center',*!/
    marginTop: 50,
    paddingHorizontal : PADDING
  },
  input: {
    width: 200,
    height: 50,
    backgroundColor: 'yellow',
  },
  item: {
    height: ((WIDTH - PADDING * 2) / 2 ) - 5,
    width: ((WIDTH - PADDING * 2) / 2 ) - 5,
    backgroundColor: 'black',
    marginVertical: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
} );*/
