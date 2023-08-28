import {ActivityIndicator, StyleSheet, View} from 'react-native';

export default function Loader() {
  return (
    <ActivityIndicator
      style={LoaderStyles.loader}
      color={'#F4FBF4'}
      size="large"
    />
  );
}

const LoaderStyles = StyleSheet.create({
  loader: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 999999,
    backgroundColor: '#055600',
    opacity: 0.8,
  },
});
