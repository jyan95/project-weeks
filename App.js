import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FixedDimensionsBasics from './containers/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>a yeet</Text>
      <FixedDimensionsBasics/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
