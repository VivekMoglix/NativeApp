import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LoginView from '../components/LoginView';
import HomeView from '../components/HomeView';
import ProfileView from '../components/ProfileView';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {loggedInUser} from '../redux/actions/authActions';
import {ActivityIndicator, View} from 'react-native';

const Tab = createBottomTabNavigator();

function SplashScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size="large" color="#055600" />
    </View>
  );
}

export default function Routes() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(({authReducer}) => authReducer?.isLoggedIn);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function retrieveData() {
      setIsLoading(true);
      try {
        const user = await AsyncStorage.getItem('user');
        if (user != null) {
          dispatch(loggedInUser(JSON.parse(user)));
        }
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    }
    retrieveData();
  }, [isLoggedIn]);

  if (isLoading) {
    return <SplashScreen />;
  }
  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        <Tab.Navigator initialRouteName="Login" backBehavior="initialRoute">
          <Tab.Screen
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarStyle: {display: 'none'},
            }}
            name="Login"
            component={LoginView}
          />
        </Tab.Navigator>
      ) : (
        <Tab.Navigator initialRouteName="Home" backBehavior="initialRoute">
          <Tab.Screen
            options={{
              tabBarIcon: () => {
                return <Icon name="home" size={18} />;
              },
            }}
            name="Home"
            component={HomeView}
          />
          <Tab.Screen
            options={{
              tabBarIcon: () => {
                return <Icon name="account-circle" size={18} />;
              },
            }}
            name="My Profile"
            component={ProfileView}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}
