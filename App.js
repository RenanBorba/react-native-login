import React from 'react';
import { StatusBar } from 'react-native';

import Login from './src/pages/Login';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#191919"
      />

      <Login />
    </>
  );
};