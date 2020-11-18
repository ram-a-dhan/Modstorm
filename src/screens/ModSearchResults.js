import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ModSearchResults() {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView style={[styles.center, styles.white]}>
      <View style={styles.center}>
        <Text>Mod Search Results Screen</Text>
        <Button
          title="Go to Mods"
          onPress={() => navigate('Mods')}
        />
        <Button
          title="Go to Details"
          onPress={() => navigate('ModDetails')}
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