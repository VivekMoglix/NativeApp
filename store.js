import {createStore} from 'redux';
import userReducer from './userReducer';

const configureStores = createStore(userReducer);

export default configureStores;
