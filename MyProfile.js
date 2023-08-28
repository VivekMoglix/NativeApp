import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Card from './components/card';

const doubleStack = [
  {image: require('./assets/icon_FAQs_active_24px-3x.png'), text: 'FAQs'},
  {image: require('./assets/contact_us-3x.png'), text: 'Contact Us'},
];

const tripleStack = [
  {image: require('./assets/icon_FAQs_active_24px-3x.png'), text: 'Share App'},
  {image: require('./assets/contact_us-3x.png'), text: 'About Us'},
  {
    image: require('./assets/icon_FAQs_active_24px-3x.png'),
    text: 'Privacy Policy',
  },
];

const SingleStack = [
  {
    image: require('./assets/icon_FAQs_active_24px-3x.png'),
    text: 'Beocme a Seller',
  },
];

export default function MyProfile({navigation}) {
  return (
    <ScrollView style={{flex: 1, marginBottom: 12, backgroundColor: '#F7F7FA'}}>
      <View style={styles.container}>
        <View style={styles.login}>
          <ImageBackground
            source={require('./assets/bg-2x.png')}
            resizeMode="stretch"
            style={{width: '100%', height: 90, borderRadius: 12}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                padding: 15,
              }}>
              <Image
                source={require('./assets/copper-diamond-fill.png')}
                style={{width: 36, height: 36}}
              />
              <View style={{marginLeft: 12}}>
                <Text style={[styles.textColorWhite, styles.loginSignupText]}>
                  Login / Sign Up
                </Text>
                <Text style={[styles.textColorWhite, styles.get50CoinsText]}>
                  Get 50 Mogli Coins On Sign Up
                </Text>
                <Text style={[styles.textColorWhite, styles.saveMoreText]}>
                  & Save more on every order you place
                </Text>
              </View>
              <Image
                source={require('./assets/arrow-right-s-line-1.png')}
                style={{width: 36, height: 36, marginLeft: 'auto'}}
              />
            </View>
          </ImageBackground>
        </View>
      </View>
      <View style={{marginHorizontal: 15}}>
        <TouchableWithoutFeedback onPress={() => console.log('Spin Win')}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              borderColor: '#EFEFF4',
              borderWidth: 1,
              alignItems: 'center',
              marginTop: 15,
              padding: 10,
              borderRadius: 8,
              height: 58,
            }}>
            <Image
              source={require('./assets/Image241-3x.png')}
              style={styles.img32}
            />
            <View style={{marginLeft: 12}}>
              <Text style={styles.tryLuckText}>Try your luck for the day</Text>
              <Text style={styles.spinWheelText}>
                Spin the wheel and win amazing coupons
              </Text>
            </View>
            <Image
              source={require('./assets/arrow-right-s-line.png')}
              style={{width: 24, height: 24, marginLeft: 'auto'}}
            />
          </View>
        </TouchableWithoutFeedback>
        <Card data={doubleStack} />
        <Card data={tripleStack} />
        <Card data={SingleStack} />
        <TouchableWithoutFeedback onPress={() => console.log('App Updater')}>
          <View
            style={{
              backgroundColor: 'white',
              paddingHorizontal: 15,
              borderRadius: 8,
              marginTop: 10,
              paddingVertical: 8,
              borderColor: '#F4F4F6FD',
              borderWidth: 1,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 8,
              }}>
              <Image
                source={require('./assets/icon_FAQs_active_24px-3x.png')}
                style={styles.img32}
              />
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 12,
                  fontFamily: 'Poppins-Medium',
                }}>
                App Updater
              </Text>
              <TouchableWithoutFeedback
                onPress={() => console.log('Update Now')}>
                <View
                  style={{
                    marginLeft: 'auto',
                    backgroundColor: '#FBE8E9',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 4,
                  }}>
                  <Text
                    style={{color: '#D9232D', fontFamily: 'Poppins-SemiBold'}}>
                    UPDATE NOW
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingBottom: 30,
  },
  login: {
    marginHorizontal: 15,
    marginTop: 10,
    backgroundColor: 'white',
    paddingBottom: 30,
  },
  textColorWhite: {
    color: 'white',
  },
  loginSignupText: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  get50CoinsText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },
  saveMoreText: {
    fontSize: 10,
    color: '#C3C1C1',
    fontFamily: 'Poppins-Regular',
  },
  tryLuckText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  spinWheelText: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#979797',
  },
  img32: {
    width: 32,
    height: 32,
  },
});
