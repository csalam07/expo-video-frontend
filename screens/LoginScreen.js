import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';

const image = {
  uri: 'https://img.freepik.com/free-vector/gradient-blur-colorful-phone-wallpaper-vector_53876-169252.jpg?w=360',
};

const LoginScreen = ({ navigation }) => {
  const { width } = Dimensions.get('window');

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Contacts');
  };

  return (
    <SafeAreaView style={styles.page}>
      <ImageBackground source={image} style={styles.image}>
        <View
          style={{
            backgroundColor: '#000',
            flex: 1,
            opacity: 0.6,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={[
              styles.container,
              {
                width: width,
              },
            ]}
          >
            <TextInput
              placeholder={'username'}
              style={styles.search__input}
              value={userName}
              placeholderTextColor="white"
              onChangeText={(userName) => setUserName(userName)}
              autoCapitalize="none"
            />

            <TextInput
              placeholder={'password'}
              style={styles.search__input}
              value={password}
              secureTextEntry
              placeholderTextColor="white"
              onChangeText={(password) => setPassword(password)}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.button_text}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    marginTop: 30,
    padding: 15,
  },
  search__input: {
    backgroundColor: 'lightgray',
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
    marginHorizontal: 15,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    marginHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 15,
    marginTop: 15,
  },
  button_text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
