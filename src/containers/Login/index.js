import {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {LoginStyles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  loggedInUser,
  setLoading,
  setError,
} from '../../redux/actions/authActions';
import Icon from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import Loader from '../../components/Loader';

export default function LoginView() {
  const dispatch = useDispatch();

  const isLoading = useSelector(({authReducer}) => authReducer?.isLoading);
  const errorMessage = useSelector(
    ({authReducer}) => authReducer?.errorMessage,
  );
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onLogin(name, pw) {
    if (!isValid()) return;
    dispatch(setLoading(true));
    axios
      .post('http://restapi.adequateshop.com/api/authaccount/login', {
        email: name,
        password: pw,
      })
      .then(res => {
        console.log(res?.data);
        if (res?.data?.message === 'success') {
          dispatch(setLoading(false));
          let data = res?.data?.data;
          dispatch(loggedInUser(data));
        } else {
          console.log(res);
          dispatch(setLoading(false));
          dispatch(setError(res?.data?.message));
        }
      })
      .catch(err => {
        dispatch(setLoading(false));
        console.log(err);
      });
  }

  function isValid() {
    let emailRegex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    if (!email.match(emailRegex)) {
      dispatch(setError('Please enter valid email'));
      return false;
    } else if (password.length < 5) {
      dispatch(setError('Password should be more than 5 characters'));
      return false;
    }
    return true;
  }

  return (
    <>
      {isLoading && <Loader />}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={LoginStyles.container}>
            <Text style={LoginStyles.welcomeText}>Welcome</Text>
            <View style={LoginStyles.loginContainer}>
              <TextInput
                style={LoginStyles.inputField}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
              />
              <View style={LoginStyles.passwordInputContainer}>
                <TextInput
                  style={LoginStyles.inputField}
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Password"
                  secureTextEntry={isPasswordVisible ? false : true}
                />
                <View style={LoginStyles.passwordHideShowButton}>
                  <TouchableWithoutFeedback
                    onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                    {!isPasswordVisible ? (
                      <Icon name="eye-with-line" size={24} color="#055600" />
                    ) : (
                      <Icon name="eye" size={24} color="#055600" />
                    )}
                  </TouchableWithoutFeedback>
                </View>
              </View>
              {errorMessage.length > 2 && (
                <Text style={LoginStyles.errorMsg}>{errorMessage}</Text>
              )}
              <TouchableOpacity
                style={LoginStyles.loginButton}
                onPress={() => onLogin(email, password)}>
                <Text style={LoginStyles.loginButtonText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});
