import React from 'react';
import { Alert, Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import MyUserSvg from '../svg/MyUserSvg';
import MyArrowRightSvg from '../svg/MyArrowRightSvg';
import MyEmailSvg from '../svg/MyEmailSvg';
import MyPhoneSvg from '../svg/MyPhoneSvg';
import MyBirthdaySvg from '../svg/MyBirthdaySvg';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get( 'screen' );
export const WIDTH = width;
const PADDING_HORIZONTAL = 13;

const EditProfilePage = () => {
  const navigation = useNavigation();
  return (
    <View style={ styles.container }>
      <Image
        style={ styles.profileIcon }
        source={ {
          uri: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
        } }
      />
      <Pressable onPress={ () => Alert.alert( 'Загрузка фото..' ) }>
        <Text style={ [ styles.text, styles.mainText, styles.changePhotoBtn ] }>Изменить фото</Text>
      </Pressable>
      <View style={ styles.dataContainer }>
        <Pressable onPress={ () => navigation.navigate( 'Редактирование имени' ) }>
          <View style={ [ styles.data, { marginBottom: 8 } ] }>
            <View style={ { display: 'flex', flexDirection: 'row', alignItems: 'center' } }>
              <MyUserSvg/>
              <Text style={ [ styles.text, { color: '#07A95B', marginLeft: 7 } ] }>Имя Фамилия</Text>
            </View>

            <View style={ { display: 'flex', flexDirection: 'row', alignItems: 'center' } }>
              <Text style={ [ styles.text, { color: '#BFBFBF', marginRight: 8 } ] }>Иван Иванов</Text>
              <MyArrowRightSvg/>
            </View>
          </View>
        </Pressable>
        <Pressable onPress={ () => navigation.navigate( 'Редактирование email' ) }>
          <View style={ {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: WIDTH - ( PADDING_HORIZONTAL * 2 ),
            height: 50,
            backgroundColor: '#fff',
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            paddingTop: 15,
            paddingBottom: 15,
            paddingHorizontal: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#f1f1f1',
            borderColor: '#E8E9EB',
            borderWidth: 1,
          } }>
            <View style={ { display: 'flex', flexDirection: 'row', alignItems: 'center' } }>
              <MyEmailSvg/>
              <Text style={ [ styles.text, { color: '#07A95B', marginLeft: 7 } ] }>E-mail</Text>
            </View>
            <View style={ { display: 'flex', flexDirection: 'row', alignItems: 'center' } }>
              <Text style={ [ styles.text, { color: '#BFBFBF', marginRight: 8 } ] }>ivanovIvan@gmail.com</Text>
              <MyArrowRightSvg/>
            </View>
          </View>
        </Pressable>
        <Pressable onPress={ () => navigation.navigate( 'Редактирование телефона' ) }>
          <View style={ {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: WIDTH - ( PADDING_HORIZONTAL * 2 ),
            height: 50,
            backgroundColor: '#fff',
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            paddingTop: 15,
            paddingBottom: 15,
            paddingHorizontal: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#f1f1f1',
            marginBottom: 8,
            borderColor: '#E8E9EB',
            borderWidth: 1,
          } }>
            <View style={ { display: 'flex', flexDirection: 'row', alignItems: 'center' } }>
              <MyPhoneSvg/>
              <Text style={ [ styles.text, { color: '#07A95B', marginLeft: 7 } ] }>Телефон</Text>
            </View>
            <View style={ { display: 'flex', flexDirection: 'row', alignItems: 'center' } }>
              <Text style={ [ styles.text, { color: '#BFBFBF', marginRight: 8 } ] }>+7 (999) 999-99-99</Text>
              <MyArrowRightSvg/>
            </View>
          </View>
        </Pressable>
        <Pressable onPress={ () => navigation.navigate( 'Редактирование даты рождения' ) }>
          <View style={ [ styles.data, { marginBottom: 8 } ] }>
            <View style={ { display: 'flex', flexDirection: 'row', alignItems: 'center' } }>
              <MyBirthdaySvg/>
              <Text style={ [ styles.text, { color: '#07A95B', marginLeft: 7 } ] }>День рождения</Text>
            </View>
            <View style={ { display: 'flex', flexDirection: 'row', alignItems: 'center' } }>
              <Text style={ [ styles.text, { color: '#BFBFBF', marginRight: 8 } ] }>10.08.1982</Text>
              <MyArrowRightSvg/>
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create( {
    container: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingHorizontal: PADDING_HORIZONTAL,
      backgroundColor: '#f9f9fa',
      width: WIDTH,
    },
    profileIcon: {
      width: 150,
      height: 150,
      marginTop: 22,
    },
    text: {
      fontFamily: 'Roboto',
      fontSize: 14,
      color: '#474747',
    },
    mainText: {
      fontWeight: '700',
    },
    changePhotoBtn: {
      paddingBottom: 8,
      paddingTop: 8,
      paddingLeft: 10.4,
      paddingRight: 6.6,
      backgroundColor: '#07A95B',
      color: '#fff',
      borderRadius: 4,
      fontSize: 14,
      marginTop: 21,
    },
    cityName: {
      fontWeight: '400',
      color: '#747474',
      marginRight: 4,
    },
    arrow: {
      width: 11.08,
      height: 6.72,
    },
    textContainer: {
      width: ( ( WIDTH / 3 ) * 2 ),
    },
    dataContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 21,
    },
    data: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: WIDTH - ( PADDING_HORIZONTAL * 2 ),
      height: 50,
      backgroundColor: '#fff',
      borderRadius: 8,
      paddingTop: 15,
      paddingBottom: 15,
      paddingHorizontal: 10,
      borderColor: '#E8E9EB',
      borderWidth: 1,
    },
  },
);
export default EditProfilePage;