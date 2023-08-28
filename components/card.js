import {
  Image,
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

export default function Card({data}) {
  return (
    <View
      style={{
        backgroundColor: 'white',
        paddingLeft: 12,
        borderRadius: 8,
        marginTop: 10,
        paddingVertical: 4,
        borderColor: '#F4F4F6FD',
        borderWidth: 1,
      }}>
      {data.map((d, index) => {
        return (
          <TouchableWithoutFeedback key={d.text}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 12,
                borderBottomColor: '#F4F4F6FD',
                borderBottomWidth: data.length - 1 === index ? 0 : 1,
              }}>
              <Image source={d.image} style={{width: 32, height: 32}} />
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 12,
                  fontFamily: 'Poppins-Medium',
                }}>
                {d.text}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
}
