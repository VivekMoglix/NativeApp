import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import authReducer from '../reducers/authReducer';
import postsReducer from '../reducers/postsReducer';
import homeReducer from '../reducers/homeReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();

const configureStore = createStore(
  combineReducers({authReducer, postsReducer, homeReducer}),
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default configureStore;
