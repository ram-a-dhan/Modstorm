import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function Splash({ route }) {
  const { width } = useWindowDimensions();

  useEffect(() => {
    setTimeout(() => {
      route.params.setShowSplashScreen(false);
    }, 3000);
  }, []);

  return (
    <View style={[styles.center, styles.background, { width }]}>
      <View style={styles.flexRow}>
        <Animatable.View animation="fadeIn" delay={500}>
          <Animatable.Image
            animation="rotate"
            direction="reverse"
            iterationCount="infinite"
            source={require('../assets/images/modstorm-logo.png')}
            style={styles.logo}
          />
        </Animatable.View>
        <Animatable.View animation="fadeInRight" style={styles.flexRow}>
          <Text style={styles.type1}>MOD</Text>
          <Text style={styles.type2}>STORM</Text>
        </Animatable.View>
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
    // backgroundColor: '#181818',
  },
  flexRow: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 75,
    height: 75,
  },
  type1: {
    fontFamily: 'BarlowCondensed-Light',
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