import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';

export default function GameBanner({ selectedGame, height, searchBarHeight }) {
  return (
    <ImageBackground
      source={{ uri: `https://staticdelivery.nexusmods.com/Images/games/4_3/tile_${selectedGame.id}.jpg` }}
      style={[styles.gameBannerBg, { height: (height * 0.5) - searchBarHeight }]}
    >
      <View style={styles.gameBannerView}>
        <Text style={styles.gameBannerTopText}>Selected Game:</Text>
        <Text style={styles.gameBannerBottomText}>{selectedGame.name.toUpperCase()}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  gameBannerBg: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  gameBannerView: {
    width: '100%',
    padding: 25,
    backgroundColor: '#00000080',
  },
  gameBannerTopText: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  gameBannerBottomText: {
    fontFamily: 'BarlowCondensed-Medium',
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
  },
});