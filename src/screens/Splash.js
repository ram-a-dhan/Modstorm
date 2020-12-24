import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import colors from '../assets/colors';

export default function Splash({ route }) {
  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <Animatable.View animation="fadeIn" delay={500}>
          <Animatable.Image
            source={require('../assets/images/modstorm-logo.png')}
            style={styles.logo}
            animation="rotate"
            direction="reverse"
            iterationCount={3}
            onAnimationEnd={() => {
              route.params.setShowSplashScreen(false)
            }}
          />
        </Animatable.View>
        <Animatable.View
          animation="fadeInRight"
          style={styles.flexRow}
        >
          <Text style={styles.type1}>
            MOD
          </Text>
          <Text style={styles.type2}>
            STORM
          </Text>
        </Animatable.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.SYSTEM,
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
    color: colors.ON_PRIMARY,
  },
  type2: {
    fontFamily: 'BarlowCondensed-Bold',
    fontSize: 40,
    color: colors.PRIMARY,
  },
});