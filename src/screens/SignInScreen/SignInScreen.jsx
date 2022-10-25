import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CustomInput from '../../components/CustomInput';
import { colors } from '../../context/constants';


export default function SignInScreen() {
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