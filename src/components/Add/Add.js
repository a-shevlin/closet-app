import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import React, { useState} from 'react';
import { firebase } from '../../firebase';

export default function Add() {
  const todoRef = firebase.firestore().collection('newData');
  const [addData, setAddData] = useState('');

  const addField = () => {
    if(addData && addData.length > 0) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        heading: addData,
        createdAt: timestamp,
      };
      todoRef
        .add(data)
        .then(() => {
          setAddData('');
          Keyboard.dismiss();
        })
        .catch((error) => {
          alert(error);
        })
    }
  }

  return(
    <View style={{flex: 1, justifyContent: 'center'}}>
      <TextInput 
        placeholder='Add Text'
        onChangeText={(heading) => setAddData(heading)}
        value={addData}
      />
      <TouchableOpacity onPress={addField}>
        <Text>Add</Text>

      </TouchableOpacity>
    </View>
    )
}