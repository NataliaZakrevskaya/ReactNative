import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { MainPage } from '../pages/MainPage';
import AuthorizationPage from '../pages/AuthorizationPage';
import RegistrationPageFirstStep from '../pages/RegistrationPageFirstStep';
import RegistrationPageSecondStep from '../pages/RegistrationPageSecondStep';
import EditProfilePage from '../pages/EditProfilePage';
import EditNamePage from '../pages/EditNamePage';
import EditEmailPage from '../pages/EditEmailPage';
import EditPhoneNumberPage from '../pages/EditPhoneNumberPage';
import EditBirthdayPage from '../pages/EditBirthdayPage';
import NotificationsPage from '../pages/NotificationsPage';

const MainStack = createNativeStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator
      initialRouteName="Главная"
      screenOptions={ {
        headerShown: false,
      } }>
      <MainStack.Screen name="Главная" component={ MainPage }/>
      <MainStack.Screen name="Логин" component={ AuthorizationPage }/>
      <MainStack.Screen name="Регистрация1" component={ RegistrationPageFirstStep }/>
      <MainStack.Screen name="Регистрация2" component={ RegistrationPageSecondStep }/>
    </MainStack.Navigator>
  );
}

export default MainStackScreen;