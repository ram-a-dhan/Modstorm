import React from 'react';
import {
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../assets/colors';

export default function GameBanner(props) {
  const { selectedGame, height } = props;

  return (
    <ImageBackground
      source={{
        uri: `https://staticdelivery.nexusmods.com`
          +  `/Images/games/4_3`
          +  `/tile_${selectedGame.id}.jpg`,
      }}
      style={[
        styles.gameBannerBackground,
        { height: height * 0.5 },
      ]}
    >
      <LinearGradient
        colors={[
          colors.BACKGROUND + '00',
          colors.BACKGROUND + 'AA',
          colors.BACKGROUND + 'FF',
        ]}
        locations={[0, 0.3, 0.9]}
        style={styles.gameBannerView}
      >
        <Text style={styles.gameBannerTopText}>
          Selected Game:
        </Text>
        <Text style={styles.gameBannerBottomText}>
          {selectedGame.name.toUpperCase()}
        </Text>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  gameBannerBackground: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  gameBannerView: {
    width: '100%',
    padding: 25,
  },
  gameBannerTopText: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 20,
    textAlign: 'center',
    color: colors.ON_BACKGROUND,
  },
  gameBannerBottomText: {
    fontFamily: 'BarlowCondensed-Medium',
    fontSize: 40,
    textAlign: 'center',
    color: colors.ON_BACKGROUND,
  },
});