import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import colors from '../assets/colors';

export default function Splash(props) {
  const { route } = props;

  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <Animatable.View
          animation="fadeIn"
          delay={500}
          useNativeDriver
        >
          <Animatable.Image
            style={styles.logo}
            source={require('../assets/images/modstorm-logo.png')}
            animation="rotate"
            direction="reverse"
            iterationCount={3}
            onAnimationEnd={() => {
              route.params.setShowSplashScreen(false)
            }}
            useNativeDriver
          />
        </Animatable.View>
        <Animatable.View
          style={styles.flexRow}
          animation="fadeInRight"
          useNativeDriver
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