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
      style={{ width: '100%', height: (height * 0.5) - searchBarHeight, justifyContent: 'flex-end', alignItems: 'center' }}
    >
      <View style={{ width: '100%', padding: 25, backgroundColor: '#00000080' }}>
        <Text style={{ fontFamily: 'BarlowCondensed-Regular', fontSize: 20, textAlign: 'center', color: 'white' }}>Selected Game:</Text>
        <Text style={{ fontFamily: 'BarlowCondensed-Medium', fontSize: 40, textAlign: 'center', color: 'white' }}>{selectedGame.name.toUpperCase()}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  
});