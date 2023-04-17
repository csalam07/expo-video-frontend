import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import dummyContacts from '../assets/data/contacts.json';
import { Contact } from '../components';
import { Ionicons, Feather } from '@expo/vector-icons';
import { getFilteredData, useDebounceValue } from '../utils';

const Contacts = () => {
  const [input, setInput] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(dummyContacts);

  const debounceInput = useDebounceValue(input);

  useEffect(() => {
    (async () => {
      if (!debounceInput.length > 0) {
        setFilteredContacts(dummyContacts);
        return;
      }
      console.log(debounceInput);
      const data = await getFilteredData(dummyContacts, debounceInput);
      setFilteredContacts(data);
    })();
  }, [debounceInput]);

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.header__left}>Groups</Text>
          <Text style={styles.header__center}>Contacts</Text>
          <Feather name="plus" size={24} color="#007AFF" />
        </View>
        <View style={styles.search__box}>
          <Ionicons name="search" size={24} color="gray" />
          <TextInput
            placeholder={'Search'}
            style={styles.search__input}
            value={input}
            onChangeText={(input) => setInput(input)}
          />
        </View>
        <FlatList
          data={filteredContacts}
          renderItem={({ item }) => <Contact item={item} />}
          keyExtractor={(item) => item.user_id}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          style={styles.contacts}
        />
      </View>
    </SafeAreaView>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  page: {
    marginTop: 30,
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginVertical: 15,
  },
  header__left: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  header__center: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  search__box: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
    padding: 5,
    marginVertical: 10,
  },
  search__input: {
    paddingHorizontal: 5,
    flex: 1,
  },
  contacts: {
    marginTop: 10,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#f0f0f0',
  },
});
