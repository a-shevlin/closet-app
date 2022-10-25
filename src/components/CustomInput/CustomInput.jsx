import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default function CustomInput() {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder='placeholder'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  input: {},
})