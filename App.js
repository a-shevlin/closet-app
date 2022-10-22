import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Button } from 'react-native';
import Register from './src/components/Register';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function toggleModal() {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Text>Hello Welcome</Text>
      <Button title="Account"  onPress={toggleModal}/>
      <Modal
        visible={isModalVisible}>
        <Button title="Home"  onPress={toggleModal}/>
        <Register />
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
