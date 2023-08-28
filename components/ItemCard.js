import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function ItemCard() {
  return (
    <View style={{backgroundColor: 'white', marginTop: 10, padding: 10}}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#EBEBEB',
            borderRadius: 6,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            padding: 6,
          }}>
          <Image
            source={require('../assets/printer-3x.png')}
            style={{width: 130, height: 150, alignSelf: 'center'}}
            resizeMode="cover"
          />
          <Text
            style={{
              position: 'absolute',
              left: -1,
              top: -1,
              height: 0,
              width: 85,
              paddingHorizontal: 5,
              borderTopWidth: 8,
              borderBottomWidth: 8,
              borderRightWidth: 10,
              borderTopColor: '#1D89F0',
              borderBottomColor: '#1D89F0',
              borderTopLeftRadius: 6,
              borderBottomLeftRadius: 6,
              borderRightColor: '#fff',
              fontSize: 10,
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
              textTransform: 'uppercase',
            }}>
            New Arrival
          </Text>
          <Image
            style={{
              position: 'absolute',
              width: 32,
              height: 32,
              bottom: 0,
              right: 0,
            }}
            source={require('../assets/youtube-3x.png')}
          />
        </View>
        <View style={{flex: 1, marginLeft: 10}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: '#458D00',
                borderRadius: 3,
                flexDirection: 'row',
                alignItems: 'center',
                padding: 2,
              }}>
              <Text style={{color: '#fff', fontSize: 10}}>4.1</Text>
              <Icon name="star" color="#fff" />
            </View>
            <Text
              style={{
                fontSize: 12,
                marginLeft: 5,
                color: '#6F6F6F',
                fontFamily: 'Poppins-Medium',
              }}>
              (1034 Reviews)
            </Text>
          </View>
          <View style={{marginTop: 5, flexDirection: 'row'}}>
            <Text
              style={{
                flexWrap: 'wrap',
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
                color: '#303030',
              }}>
              HP 1200W White Never stop All- in-One Wireless Laser Printer White
              Never stop
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                textDecorationLine: 'line-through',
              }}>
              {' '}
              {'\u20B9'}99,999.00
            </Text>
            <Text
              style={{
                textTransform: 'uppercase',
                color: '#219109',
                fontSize: 12,
                marginLeft: 5,
                fontWeight: 'bold',
              }}>
              12% Off
            </Text>
          </View>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
            {'\u20B9'}89,744.00
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 'auto',
            }}>
            <Icon name="check-circle" size={16} />
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 12,
                marginLeft: 5,
              }}>
              Easy EMI Available
            </Text>
          </View>
        </View>
      </View>
      <ScrollView
        style={{marginTop: 15}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {arr.map((a, index) => {
          return (
            <Text
              style={[
                styles.features,
                {marginRight: index != arr.length - 1 ? 6 : 0},
              ]}
              key={index}>{`Text ${a}`}</Text>
          );
        })}
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
          gap: 12,
        }}>
        <TouchableOpacity style={styles.addToCardBtn}>
          <Icon name="shopping-cart" color="red" size={16} />
          <Text style={{color: '#D9232D', marginLeft: 10}}>Add to Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buyNowBtn}>
          <Text style={{color: 'white'}}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  features: {
    borderWidth: 1,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: '#C4C4C4',
    alignSelf: 'center',
    color: '#3C3C3C',
    borderRadius: 4,
  },
  addToCardBtn: {
    borderColor: '#D9232D',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    flex: 1,
    fontFamily: 'Poppins-Bold',
  },
  buyNowBtn: {
    backgroundColor: '#D9232D',
    borderColor: '#D9232D',
    borderWidth: 1,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginLeft: 'auto',
    flex: 1,
    fontFamily: 'Poppins-Bold',
  },
});
