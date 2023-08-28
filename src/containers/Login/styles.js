import {StyleSheet} from 'react-native';

export const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#055600',
  },
  welcomeText: {
    fontSize: 40,
    color: 'white',
    marginBottom: 50,
    fontFamily: 'Poppins-ThinItalic',
  },
  loginContainer: {
    backgroundColor: '#F4FBF4',
    width: '100%',
    padding: 60,
    gap: 30,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  inputField: {
    borderBottomColor: '#055600',
    borderBottomWidth: 1,
    padding: 8,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  passwordInputContainer: {
    position: 'relative',
  },
  passwordHideShowButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    paddingBottom: 8,
  },
  loginButton: {
    padding: 10,
    marginTop: 10,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 6,
    width: '50%',
    backgroundColor: '#055600',
    borderColor: '#055600',
  },
  loginButtonText: {
    alignSelf: 'center',
    color: '#F4FBF4',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorMsg: {
    color: 'red',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBoldItalic',
    alignSelf: 'center',
  },
});
