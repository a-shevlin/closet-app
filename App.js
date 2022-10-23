import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Alert, StyleSheet, Text, View, Modal, Button } from 'react-native';
import Register from './src/components/Register';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const [count, setCount] = useState(0);

  function toggleModal() {
    setIsModalVisible(!isModalVisible);
  };

  function togglePress() {
    setIsPress(!isPress);
  }

  return (
    <View style={styles.container}>
      <Text>Hello Welcome</Text>
      <Button title="Account"  onPress={toggleModal}/>
      <Pressable 
        style={({ pressed }) => [
          {
            color: pressed
              ? 'red'
              : 'white'
          }
        ]}
        onPress={togglePress}>
            {({ pressed }) => (
              !pressed ? 
              <Text style={styles.text}>Press to change color</Text>
              : <Text style={styles.pressed}>Pressed</Text> 

            )}
      </Pressable>
      <Modal
        animationType='slide'
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
        visible={isModalVisible}>
        <Button title="Home"  onPress={toggleModal}/>
        <Register/>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaabbb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    color: 'red',
  }
});
