import React from 'react';
import { View, StyleSheet } from 'react-native';
import SentenceBar from '../Components/SentenceBar';
import Touchboard from '../Components/Touchboard/Touchboard';

export default function TouchBoardScreen() {
  return (
    <View style={styles.screen}>
      <SentenceBar />
      <Touchboard />
      {/* <View style={styles.content}>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    flex: 1,
  },
});
