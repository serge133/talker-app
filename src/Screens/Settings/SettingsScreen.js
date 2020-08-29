import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SettingsScreen(props) {
  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Credits')}>
        <View style={styles.entry}>
          <Text>Credits</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  entry: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
});
