import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

export default function SearchBar({ scrollToHeader }) {
  return (
    <View style={styles.searchBarView}>
      <TextInput
        style={styles.searchBarInput}
        placeholder="Search Game"
        placeholderTextColor="darkgrey"
        onFocus={scrollToHeader}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarView: {
    width: '100%',
    height: 50,
    backgroundColor: 'black',
  },
  searchBarInput: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
});