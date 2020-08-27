import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SentenceBar(props) {
  return (
    <View style={styles.sentenceBar}>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sentenceBar: {
    width: '100%',
    height: 80,
    borderWidth: 10,
    borderColor: '#0099dd',
  },
});
