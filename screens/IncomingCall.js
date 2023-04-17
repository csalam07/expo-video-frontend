import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import React from 'react';
import { Ionicons, Feather } from '@expo/vector-icons';

const image = {
  uri: 'https://i.pinimg.com/236x/11/34/66/113466326a275da102d7cbe17496a1c5.jpg',
};

const IncomingCall = ({ navigation }) => {
  const { height, width } = Dimensions.get('window');

  const decline = () => {
    navigation.navigate('Contacts');
  };

  const accept = () => {
    navigation.navigate('Call');
  };

  return (
    <SafeAreaView style={styles.page}>
      <ImageBackground source={image} style={styles.image}>
        <View
          style={{
            backgroundColor: '#000',
            flex: 1,
            opacity: 0.6,
            justifyContent: 'space-between',
          }}
        >
          <View style={styles.container}>
            <Text style={styles.name}>Bora ❤️</Text>
            <Text style={styles.number}>WhatsApp Video..</Text>
          </View>
          <View
            style={[
              styles.bottomsheet,
              {
                height: height / 2.5,
              },
            ]}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: width / 1.5,
              }}
            >
              <TouchableOpacity style={styles.icons}>
                <Ionicons name="ios-alarm" size={24} color="white" />
                <Text style={styles.icon__text}>Remind me</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.icons}>
                <Ionicons name="chatbubble" size={24} color="white" />
                <Text style={styles.icon__text}>Message</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: width / 1.5,
                marginTop: 20,
              }}
            >
              <TouchableOpacity onPress={decline}>
                <Ionicons
                  name="close"
                  size={30}
                  color="white"
                  style={styles.icon__decline}
                />
                <Text style={styles.icon__text}>Decline</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={accept}>
                <Feather
                  name="check"
                  size={30}
                  color="white"
                  style={styles.icon__accept}
                />
                <Text style={styles.icon__text}>Accept</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default IncomingCall;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: 'gray',
  },
  container: {
    marginTop: 30 * 2,
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
  bottomsheet: {
    padding: 15,
    alignItems: 'center',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  icons: {
    padding: 10,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  icon__text: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  icon__decline: {
    backgroundColor: '#fe0000',
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
  },
  icon__accept: {
    backgroundColor: '#2c992e',
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
  },
});
