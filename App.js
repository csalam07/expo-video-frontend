import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Calling,
  CallScreen,
  Contacts,
  IncomingCall,
  LoginScreen,
} from './screens';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="IncomingCall" component={IncomingCall} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Contacts" component={Contacts} />
          <Stack.Group>
            <Stack.Screen name="Call" component={CallScreen} />
            <Stack.Screen name="Calling" component={Calling} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
