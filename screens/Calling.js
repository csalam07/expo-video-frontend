import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { BottomSheet } from '../components';

const image = {
  uri: 'https://wallpaperaccess.com/full/1613160.jpg',
};

const Calling = ({ navigation, route }) => {
  console.log(route?.params?.user);
  const { user_display_name, user_id, user_name, image_url, phone_number } =
    route?.params?.user;
  console.log(user_display_name, user_id, user_name);

  return (
    <SafeAreaView style={styles.page}>
      <ImageBackground
        source={{
          uri: image_url,
        }}
        style={styles.image}
      >
        <View
          style={{
            backgroundColor: '#000',
            flex: 1,
            opacity: 0.6,
            justifyContent: 'space-between',
          }}
        >
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={30} color="white" />
            </TouchableOpacity>
            <Text style={styles.name}>{user_display_name}</Text>
            <Text style={styles.number}>Ringing {phone_number}</Text>
          </View>
          <BottomSheet />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Calling;

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
  name: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  number: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
