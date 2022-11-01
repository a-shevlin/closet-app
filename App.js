// import { registerRootComponent } from 'expo';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { firebase } from './src/firebase';
import { Home, SignUpScreen, LoginScreen } from './src/screens';
import { colors } from './src/context/constants';


export default function App() {
  const Stack = createNativeStackNavigator();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // if (loading) {	
  //   return (	
  //     <></>	
  //   )	
  // }

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
  }, []);

  return (
    <NavigationContainer>
        <Stack.Navigator>
        { user ? (
          <Stack.Screen 
            name="Home"  
            component={Home}
            options={{
              title: "Welcome",
            }}
          />
        ) : (
          <>
            <Stack.Screen 
              name="Login" 
              component={LoginScreen}/>
            <Stack.Screen 
              name="Register" 
              component={SignUpScreen}/>
          </>
        )}
          
          
        </Stack.Navigator>
    </NavigationContainer>
  );
}

// registerRootComponent(App)

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