import {View, Text, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {LogoutUser} from '../redux/actions/authActions';
import {setPosts} from '../redux/actions/postActions';

export default function ProfileCard({data}) {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        backgroundColor: '#F4FBF4',
        paddingLeft: 12,
        borderRadius: 8,
        marginTop: 10,
        paddingVertical: 4,
        borderColor: '#055600',
        borderWidth: 1,
      }}>
      {data.map(d => {
        return (
          <TouchableWithoutFeedback
            key={d.title}
            onPress={() => {
              dispatch(LogoutUser());
              dispatch(setPosts({type: 'REMOVE', data: []}));
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 12,
              }}>
              <Icon name={d.name} size={32} color="#055600" />
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 12,
                  color: '#055600',
                  fontFamily: 'Poppins-Medium',
                }}>
                {d.title}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
}
