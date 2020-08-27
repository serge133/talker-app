import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const gridGap = 10;

export default function Touchboard(props) {
  const dummyData = [
    { id: Math.random().toString(), name: 'test' },
    { id: Math.random().toString(), name: 'test' },
    { id: Math.random().toString(), name: 'test' },
    { id: Math.random().toString(), name: 'test' },
    { id: Math.random().toString(), name: 'test' },
    { id: Math.random().toString(), name: 'test' },
    { id: Math.random().toString(), name: 'test' },
    { id: Math.random().toString(), name: 'test' },
    { id: Math.random().toString(), name: 'test' },
    { id: Math.random().toString(), name: 'test' },
    { id: Math.random().toString(), name: 'test' },
    { id: Math.random().toString(), name: 'test' },
    { id: Math.random().toString(), name: 'test' },
    { id: Math.random().toString(), name: 'test' },
    { id: Math.random().toString(), name: 'test' },
    { id: Math.random().toString(), name: 'test' },
    { id: Math.random().toString(), name: 'test' },
    { id: Math.random().toString(), name: 'test' },
    { id: Math.random().toString(), name: 'test' },
    { id: Math.random().toString(), name: 'test' },
    { id: Math.random().toString(), name: 'test' },
    { id: Math.random().toString(), name: 'test' },
  ];

  const Button = props => (
    <TouchableOpacity style={styles.button}>
      <View>
        {/* <TouchableOpacity style={{ flex: 1 }}> */}
        <Text>{props.name}</Text>
        {/* </TouchableOpacity> */}
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={dummyData}
      keyExtractor={item => item.id}
      numColumns={3}
      columnWrapperStyle={{
        marginTop: gridGap,
        paddingLeft: gridGap,
      }}
      renderItem={itemData => <Button name={itemData.item.name} />}
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
});
