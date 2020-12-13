import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function GameCard({ game, width, numColumns }) {
  return (
    <ImageBackground
      source={{ uri: `https://staticdelivery.nexusmods.com/Images/games/4_3/tile_${game.id}.jpg` }}
      style={[styles.gameCardBg, { width: width / numColumns }]}
    >
      <View style={styles.gameCardView}>
        <Text style={styles.gameTitle}>
          {game.name}
        </Text>
        <TouchableOpacity style={styles.selectButton}>
          <Text style={styles.selectButtonText}>
            SELECT
          </Text>
        </TouchableOpacity>
        <View style={styles.gameStatsView}>
          <MCIcons name="cube-outline" size={15} color="white" />
          <Text style={styles.gameStatsText}>
            {game.mods}
          </Text>
          <MCIcons name="arrow-down-circle-outline" size={15} color="white" />
          <Text style={styles.gameStatsText}>
            {game.downloads}
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  gameCardBg: {
    aspectRatio: 0.8,
    justifyContent: 'flex-end',
  },
  gameCardView: {
    padding: 10,
    backgroundColor: '#00000080',
  },
  gameTitle: {
    fontFamily: 'BarlowCondensed-Medium',
    fontSize: 15,
    color: 'white',
    marginBottom: 5,
  },
  selectButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: '#80808080',
  },
  selectButtonText: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 15,
    color: 'white',
  },
  gameStatsView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  gameStatsText: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 12,
    marginHorizontal: 3,
    color: 'white',
  },
});