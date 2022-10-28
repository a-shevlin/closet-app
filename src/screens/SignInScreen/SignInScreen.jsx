import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { colors } from '../../context/constants';
import Add from '../../components/Add';


export default function SignInScreen() {
  const [signUpSuccess, setSignUpSuccess] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function doSignUp() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  return(
    <View style={styles.container}>
      {/* <Add /> */}
      <TextInput 
        style={styles.input}
        value={email}
        placeholder={"Email"}
        onChangeText={text=>setEmail(text)}
      />
      <TextInput 
        style={styles.input}
        value={password}
        placeholder={"Password"}
        secureTextEntry={true}
        onChangeText={text=>setPassword(text)}
      />
      <TouchableOpacity onPress={doSignUp}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Dimensions.get('window').height / 16,
    backgroundColor: colors.darkerBG,
  },
})