import React, { useEffect } from 'react';
import {
  View,
  Image,
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
    <View style={[styles.center, styles.background]}>
      <View style={styles.logotype}>
        <Image
          source={require('../assets/images/modstorm-logo-small.png')}
          style={styles.logo}
        />
        <Text style={styles.type1}>MOD</Text>
        <Text style={styles.type2}>STORM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    backgroundColor: 'white',
    // backgroundColor: '#181818',
  },
  logotype: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  logo: {
    width: 75,
    height: 75,
  },
  type1: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 40,
    margin: 0,
    marginLeft: 15,
    // color: 'white',
  },
  type2: {
    fontFamily: 'BarlowCondensed-Bold',
    fontSize: 40,
    // color: '#57a5cc',
  },
});