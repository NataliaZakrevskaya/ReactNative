import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import ProfilePage from '../pages/ProfilePage';
import EditProfilePage from '../pages/EditProfilePage';
import GaragePage from '../pages/GaragePage';
import NotificationsPage from '../pages/NotificationsPage';
import DocumentPage from '../pages/DocumentPage';
import TradeInChoiceBrandPage from '../pages/TradeInChoiceBrandPage';
import TradeInChoiceModelPage from '../pages/TradeInChoiceModelPage';
import TradeInCarDescription from '../pages/TradeInCarDescription';
import GiftsPage from '../pages/GiftsPage';
import BonusPage from '../pages/BonusPage';
import EditNamePage from '../pages/EditNamePage';
import EditEmailPage from '../pages/EditEmailPage';
import EditPhoneNumberPage from '../pages/EditPhoneNumberPage';
import EditBirthdayPage from '../pages/EditBirthdayPage';

const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      initialRouteName="Профиль"
      screenOptions={ {
        headerShown: false,
      } }>
      <ProfileStack.Screen name="Профиль" component={ ProfilePage }/>
      <ProfileStack.Screen name="Подарки за баллы" component={ GiftsPage }/>
      <ProfileStack.Screen name="Страница услуги" component={ BonusPage }/>
      <ProfileStack.Screen name="Редактирование профиля" component={ EditProfilePage }/>
      <ProfileStack.Screen name="Редактирование имени" component={ EditNamePage }/>
      <ProfileStack.Screen name="Редактирование email" component={ EditEmailPage }/>
      <ProfileStack.Screen name="Редактирование телефона" component={ EditPhoneNumberPage }/>
      <ProfileStack.Screen name="Редактирование даты рождения" component={ EditBirthdayPage }/>
      <ProfileStack.Screen name="Уведомления" component={ NotificationsPage }/>
      <ProfileStack.Screen name="Гараж" component={ GaragePage }/>
      <ProfileStack.Screen name="Документы" component={ DocumentPage }/>
      <ProfileStack.Screen name="Trade-in выбор бренда" component={ TradeInChoiceBrandPage }/>
      <ProfileStack.Screen name="Trade-in выбор модели" component={ TradeInChoiceModelPage }/>
      <ProfileStack.Screen name="Trade-in описание автомобиля" component={ TradeInCarDescription }/>
    </ProfileStack.Navigator>
  );
}

export default ProfileStackScreen;