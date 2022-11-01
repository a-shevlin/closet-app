import React, { useState } from 'react';
import Logo from '../../../assets/ads_logo.png';
import { Image, StyleSheet, Text, View, Modal, Button } from 'react-native';
import { colors } from '../../context/constants';

export default function Home( {props, navigation} ) {
  // const [isModalVisible, setIsModalVisible] = useState(false);
  // const [isPress, setIsPress] = useState(false);
  // const [count, setCount] = useState(0);


  // function toggleModal() {
  //   setIsModalVisible(!isModalVisible);
  // };

  // function togglePress() {
  //   setIsPress(!isPress);
  // }
  console.log('hello');
  return(
    <View style={styles.home}>
      <Image source={Logo} style={styles.logo}/>
      <Text>Home Screen Test</Text>
      {/* <Text>{firstName}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    padding: 5,
    paddingTop: 50,
  },
  logo: {
    marginTop: 5,
    marginBottom: 5,
    width: 60,
    height: 80,
  },
})