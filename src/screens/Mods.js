import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Mods() {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView style={[styles.center, styles.white]}>
      <View style={styles.center}>
        <Text>Mods Screen</Text>
        <View></View>
        <Button
          title="Go to Details"
          onPress={() => navigate('ModDetails')}
        />
        <Button
          title="Go to Search"
          onPress={() => navigate('ModSearchResults')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  white: {
    backgroundColor: 'white',
  },
});