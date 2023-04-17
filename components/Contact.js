import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Contact = ({ item }) => {
  const navigation = useNavigation();

  const callUser = (user) => {
    navigation.navigate('Calling', { user });
  };

  return (
    <TouchableOpacity onPress={() => callUser(item)}>
      <Text style={styles.contact__name}>{item.user_display_name}</Text>
    </TouchableOpacity>
  );
};

export default Contact;

const styles = StyleSheet.create({
  contact__name: {
    fontSize: 16,
    marginVertical: 10,
  },
});
