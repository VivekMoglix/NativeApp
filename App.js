import {Provider} from 'react-redux';
import configureStore from './src/redux/store/store';
import Routes from './src/routes/routes';

export default function App() {
  return (
    <Provider store={configureStore}>
      <Routes />
    </Provider>
  );
}
