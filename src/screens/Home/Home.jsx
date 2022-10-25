import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Logo from '../../../assets/ads_logo.png';
import { Image, StyleSheet, Text, View, Modal, Button } from 'react-native';

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const [count, setCount] = useState(0);

  function toggleModal() {
    setIsModalVisible(!isModalVisible);
  };

  function togglePress() {
    setIsPress(!isPress);
  }

  return(
    <View>
      <Image source={Logo} style={styles.logo}/>
      <Text>Home Screen Test</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 5,
    marginBottom: 5,
    width: 60,
    height: 80,
  },
})