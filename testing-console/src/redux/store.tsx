import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const composedEnhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, composedEnhancer);

sagaMiddleware.run(rootSaga);

export default store;
