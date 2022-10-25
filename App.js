import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import SignInScreen from './src/screens/SignInScreen';
import Home from './src/screens/Home';
import { colors } from './src/context/constants';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <View style={styles.root}>
      <Stack.Navigator>
        <Stack.Screen 
          name="home" 
          component={Home} />
        <Stack.Screen name="signin" component={SignInScreen} />
        
      </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    padding: 5,
    paddingTop: 50,
  },
  pressed: {
    color: 'red',
  },
  
});


{/* <Pressable 
        onPress={togglePress}>
            {({ pressed }) => (
              !pressed ? 
              <Text>Press to change color</Text>
              : <Text style={styles.pressed}>Pressed</Text> 

            )}
      </Pressable> */}