import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import TouchboardIcons from './TouchboardIcons';
import { speak } from 'expo-speech';

const gridGap = 10;

// const dummyData = JSON.parse(dummyDataJSON);
export default function Touchboard(props) {
  const dummyData = [
    {
      name: 'Apple',
      icon: 'Apple',
    },
    {
      name: 'Walk',
      icon: 'Walk',
    },
  ];

  const Button = props => (
    <TouchableOpacity style={styles.button} onPress={() => speak(props.name)}>
      <View>
        <Image
          style={styles.buttonImage}
          source={TouchboardIcons[props.icon]}
        />
        <Text style={styles.buttonText}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={dummyData}
      keyExtractor={item => item.name}
      numColumns={3}
      columnWrapperStyle={{
        marginTop: gridGap,
        paddingLeft: gridGap,
      }}
      renderItem={itemData => (
        <Button name={itemData.item.name} icon={itemData.item.icon} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  touchboard: {
    flex: 1,
    borderWidth: 2,
  },
  button: {
    flex: 1,
    height: 100,
    // height: 80,
    borderWidth: 3,
    marginRight: gridGap,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  buttonImage: {
    height: 50,
    width: 50,
  },
  buttonText: {
    textAlign: 'center',
  },
});
