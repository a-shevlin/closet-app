import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { firebase } from '../../firebase'
import { colors } from '../../context/constants';
import Add from '../../components/Add';


export default function SignInScreen() {
  const [signUpSuccess, setSignUpSuccess] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const doSignUp = () => {
    if (password !== confirmPassword) {
        alert("Passwords don't match.")
        return
    }
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
            const uid = response.user.uid
            const data = {
                id: uid,
                firstName,
                lastName,
                username,
                email,
            };
            const usersRef = firebase.firestore().collection('users')
            usersRef
                .doc(uid)
                .set(data)
                .then(() => {
                    navigation.navigate('Home', {user: data})
                })
                .catch((error) => {
                    alert(error)
                });
        })
        .catch((error) => {
            alert(error)
    });
}

  return(
    <View style={styles.container}>
      {/* <Add /> */}
      <TextInput 
        style={styles.input}
        value={firstName}
        placeholder={"First Name"}
        onChangeText={text=>setFirstName(text)}
      />
      <TextInput 
        style={styles.input}
        value={lastName}
        placeholder={"Last Name"}
        onChangeText={text=>setLastName(text)}
      />
      <TextInput 
        style={styles.input}
        value={username}
        placeholder={"Username"}
        onChangeText={text=>setUsername(text)}
      />
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
      <TextInput 
        style={styles.input}
        value={confirmPassword}
        placeholder={"Confirm Password"}
        secureTextEntry={true}
        onChangeText={text=>setConfirmPassword(text)}
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