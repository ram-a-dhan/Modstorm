import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

export default function SearchBar({ searchBarHeight }) {
  return (
    <View style={[styles.searchBarView, { height: searchBarHeight }]}>
      <TextInput
        style={styles.searchBarInput}
        placeholder="Search Game"
        placeholderTextColor="darkgrey"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarView: {
    width: '100%', 
    backgroundColor: 'black',
  },
  searchBarInput: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
});