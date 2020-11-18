import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function Splash({ route }) {
  useEffect(() => {
    setTimeout(() => {
      route.params.setShowSplashScreen(false);
    }, 1500);
  }, []);

  return (
    <SafeAreaView style={[styles.center, styles.white]}>
      <View style={styles.center}>
        <Text>Splash Screen</Text>
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