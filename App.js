/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './src/screen/Home';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const App= () => {

  return (
    <SafeAreaView style={styles.screen}>
      <Home/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, //expands the component the max that it can be larger (height +)
  }
});

export default App;
