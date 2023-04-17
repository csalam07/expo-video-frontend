import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import React, { useState } from 'react';
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BottomSheet = () => {
  const { height } = Dimensions.get('window');
  const navigation = useNavigation();

  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicrophoneOn, setIsMicrophoneOn] = useState(true);

  const onReverseCamera = () => {};

  const onToggleCamera = () => {
    setIsCameraOn((prev) => !prev);
  };

  const onToggleMicrophone = () => {
    setIsMicrophoneOn((prev) => !prev);
  };
  const onHangUp = () => {
    navigation.navigate('Contacts');
  };

  return (
    <View
      style={[
        styles.bottomsheet,
        {
          height: height / 5,
        },
      ]}
    >
      <TouchableOpacity>
        <Ionicons name="chevron-up-sharp" size={30} color="white" />
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          padding: 15,
          margin: 15,
        }}
      >
        <TouchableOpacity style={styles.icons} onPress={onReverseCamera}>
          <Ionicons name="ios-camera-reverse-outline" size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.icons} onPress={onToggleCamera}>
          <MaterialCommunityIcons
            name={isCameraOn ? 'video-outline' : 'video-off-outline'}
            size={30}
            color="white"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.icons} onPress={onToggleMicrophone}>
          <Ionicons
            name={isMicrophoneOn ? 'mic-outline' : 'mic-off-outline'}
            size={30}
            color="white"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.icons__end} onPress={onHangUp}>
          <MaterialIcons name="call-end" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  bottomsheet: {
    backgroundColor: 'gray',
    padding: 15,
    alignItems: 'center',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  icons: {
    backgroundColor: 'gray',
    borderRadius: 50,
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#ddd',
  },
  icons__end: {
    backgroundColor: '#fe0000',
    borderRadius: 50,
    padding: 10,
  },
});
