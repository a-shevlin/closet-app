import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, Button, Modal } from 'react-native';

export default function Register() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [test, setTest] = useState('This is a Test');

  function toggleModal() {
    setIsModalVisible(!isModalVisible);
  }; 
  
  return(
    <View style={styles.container}>
      <Text>Register.</Text>
      <Button title="Click here to register"  onPress={toggleModal}/>
      <Modal
        visible={isModalVisible}>
        <View style={styles.form}>
          <Button title="Hide"  onPress={toggleModal}/>
          <TextInput placeholder="Email"/>
          <TextInput secureTextEntry={true} placeholder="Password"/>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    backgroundColor: '#dddddd'
  }
})