/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import RootStack from './src/componets/organisms/RootStack';

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    )
  }
};