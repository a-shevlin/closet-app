import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CustomInput from '../../components/CustomInput';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { colors } from '../../context/constants';


export default function SignInScreen() {
  const [signUpSuccess, setSignUpSuccess] = useState(null);


  return(
    <View style={styles.container}>
      <Text>Sign In Screen</Text>
      <CustomInput />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkerBG,
  },
})