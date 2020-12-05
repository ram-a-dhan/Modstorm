import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

export default function SearchBar({ searchBarHeight }) {
  return (
    <View style={{ backgroundColor: 'black', width: '100%', height: searchBarHeight }}>
      <TextInput placeholder="Search Game" style={{ textAlign: 'center', color: 'white', fontSize: 18 }} placeholderTextColor="darkgrey" />
    </View>
  );
}

const styles = StyleSheet.create({

});