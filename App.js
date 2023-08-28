import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
// import MyProfile from './MyProfile';
import LoginView from './src/components/LoginView';
import {useState} from 'react';
import HomeView from './src/components/HomeView';
import ProfileView from './src/components/ProfileView';
import Icon from 'react-native-vector-icons/MaterialIcons';
import configureStore from './src/redux/store/store';
import Routes from './src/routes/routes';

export default function App() {
  return (
    <Provider store={configureStore}>
      <Routes />
    </Provider>
  );
}
