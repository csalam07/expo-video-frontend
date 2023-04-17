import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { BottomSheet } from '../components';

const image = {
  uri: 'https://wallpaperaccess.com/full/1613160.jpg',
};

const image2 = {
  uri: 'https://i.pinimg.com/474x/ca/f0/ae/caf0ae6da78dc840936cd3125f22c730.jpg',
};

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const CallScreen = ({ navigation }) => {
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
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.navigate('Contacts')}>
                <Ionicons name="chevron-back" size={30} color="white" />
              </TouchableOpacity>

              <View style={styles.header}>
                <Ionicons name="lock-closed" size={16} color="white" />
                <Text style={styles.header__text}>End-to-end Encrypted</Text>
              </View>

              <TouchableOpacity>
                <Ionicons name="person-add-sharp" size={24} color="white" />
              </TouchableOpacity>
            </View>

            <View
              style={{
                width: '100%',
                marginTop: 15 * 2,
              }}
            >
              <TouchableOpacity style={styles.camera__preview}>
                <Image
                  style={styles.image}
                  source={image2}
                  placeholder={blurhash}
                  contentFit="contain"
                  transition={1000}
                />
              </TouchableOpacity>
            </View>
          </View>
          <BottomSheet />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default CallScreen;

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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header__text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  camera__preview: {
    alignSelf: 'flex-end',
    height: 150,
    width: 100,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#0553',
    borderRadius: 5,
  },
});
