import {Text, View} from 'react-native';
import ProfileCard from './ProfileCard';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';

const data = [{name: 'exit-to-app', title: 'Logout'}];

export default function ProfileView() {
  const user = useSelector(({authReducer}) => authReducer?.loggedInUser);
  return (
    <View>
      <View
        style={{backgroundColor: '#F4FBF4', paddingTop: 20, paddingBottom: 40}}>
        <View
          style={{
            backgroundColor: '#055600',
            padding: 10,
            marginHorizontal: 15,
            borderRadius: 6,
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}>
          <Icon name="account-circle" size={80} color="#F4FBF4" />
          <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 16, color: '#F4FBF4', fontWeight: 'bold'}}>
              {user?.Name}
            </Text>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon name="check-circle" color="#F4FBF4" size={16} />
              <Text style={{color: '#F4FBF4', marginLeft: 5}}>
                {user?.Email}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{backgroundColor: '#055600', height: '100%'}}>
        <View style={{padding: 15}}>
          <ProfileCard data={data} />
        </View>
      </View>
    </View>
  );
}
