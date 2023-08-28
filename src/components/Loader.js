import {ActivityIndicator, View} from 'react-native';

export default function Loader() {
  return (
    <ActivityIndicator
      style={{
        height: '100%',
        width: '100%',
        position: 'absolute',
        zIndex: 999999,
        backgroundColor: '#F4FBF4',
        opacity: 0.8,
      }}
      color={'#1D2E00'}
      size="large"
    />
  );
}
