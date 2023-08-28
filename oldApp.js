import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Home from './Home';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import configureStore from './store';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyProfile from './MyProfile';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={configureStore}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({navigation, route}) => ({
            tabBarIcon: ({color, size}) => {
              const icons = {
                Home: 'home',
                ['My Profile']: 'account-circle',
              };

              return (
                <Icon name={icons[route.name]} color={color} size={size} />
              );
            },
            headerLeft: () => {
              return (
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                  <View style={{paddingLeft: 15}}>
                    <Icon name="arrow-back" color="black" size={24} />
                  </View>
                </TouchableWithoutFeedback>
              );
            },
            headerRight: () => {
              return (
                <View style={{paddingRight: 15, flexDirection: 'row', gap: 16}}>
                  <Icon name="search" color="black" size={24} />
                  <View style={{position: 'relative'}}>
                    <View>
                      <Icon name="shopping-cart" color="black" size={24} />
                    </View>
                    <View
                      style={{
                        position: 'absolute',
                        right: -4,
                        top: -6,
                        backgroundColor: '#D9232D',
                        borderRadius: 3,
                        borderColor: '#fff',
                        borderWidth: 2,
                        display: 'flex',
                        paddingHorizontal: 4,
                        paddingVertical: 1,
                      }}>
                      <Text style={{color: '#fff', fontSize: 8}}>2</Text>
                    </View>
                  </View>
                </View>
              );
            },
          })}
          initialRouteName="Home"
          backBehavior="initialRoute">
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen
            name="My Profile"
            component={MyProfile}
            options={{
              headerTitleStyle: {
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              },
              headerTitleAlign: 'left',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
