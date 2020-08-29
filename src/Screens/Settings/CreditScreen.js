import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';
import { FlatList } from 'react-native-gesture-handler';

// What you need to focus on
const credits = [
  {
    name: 'icongeek26',
    url: 'https://www.flaticon.com/authors/icongeek26',
    from: 'https://www.flaticon.com/',
    fromName: 'www.flaticon.com',
  },
  {
    name: 'Freepik',
    url: 'https://www.flaticon.com/authors/freepik',
    from: 'https://www.flaticon.com/',
    fromName: 'www.flaticon.com',
  },
];
// ----

export default function CreditPage() {
  const Link = props => (
    <Text onPress={() => Linking.openURL(props.url)} style={styles.link}>
      {props.children}
    </Text>
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={credits}
        keyExtractor={item => item.name}
        renderItem={itemData => (
          <Text style={styles.creditText}>
            Icons made by{' '}
            <Link url={itemData.item.url}>{itemData.item.name}</Link> from{' '}
            <Link url={itemData.item.from}>{itemData.item.fromName}</Link>
          </Text>
        )}
      />
      <Text>We credit flaticon for giving icons</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // credit: {
  //   backgroundColor: 'white',
  //   paddingVertical: 10,
  //   paddingHorizontal: 5,
  // },
  screen: {
    flex: 1,
  },
  creditText: {
    fontSize: 17,
    textAlign: 'center',
  },
  link: {
    color: 'blue',
  },
});
