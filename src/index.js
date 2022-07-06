import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import catSaga from './cat/catSaga';
import catReducer from './cat/catSlice'
import createSagaMiddleware from '@redux-saga/core';


const saga = createSagaMiddleware();

const store = configureStore({
    reducer: {
        cat: catReducer
    },
    middleware: [saga]
})
saga.run(catSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);