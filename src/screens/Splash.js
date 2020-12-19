import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function Splash({ route }) {
  return (
    <View style={[styles.center, { /* backgroundColor: '#181818' */ }]}>
      <View style={styles.flexRow}>
        <Animatable.View animation="fadeIn" delay={500}>
          <Animatable.Image
            source={require('../assets/images/modstorm-logo.png')}
            style={styles.logo}
            animation="rotate"
            direction="reverse"
            iterationCount={3}
            onAnimationEnd={() => route.params.setShowSplashScreen(false)}
          />
        </Animatable.View>
        <Animatable.View
          animation="fadeInRight"
          style={styles.flexRow}
        >
          <Text
            style={[styles.type1, { /* color: 'white' */ }]}
          >
            MOD
          </Text>
          <Text
            style={[styles.type2, { /* color: '#57a5cc' */ }]}
          >
            STORM
          </Text>
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
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 40,
    margin: 0,
    marginLeft: 15,
  },
  type2: {
    fontFamily: 'BarlowCondensed-Bold',
    fontSize: 40,
  },
});