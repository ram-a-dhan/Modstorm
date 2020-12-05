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
      style={{ width: width / numColumns, aspectRatio: 0.8, justifyContent: 'flex-end' }}
    >
      <View style={{ padding: 10, backgroundColor: '#00000080' }}>
        <Text style={{ fontFamily: 'BarlowCondensed-Medium', fontSize: 15, color: 'white', marginBottom: 5 }}>
          {game.name}
        </Text>
        <TouchableOpacity style={{ width: '100%', height: 20, backgroundColor: '#80808080', justifyContent: 'center', alignItems: 'center', marginBottom: 5 }}>
          <Text style={{ fontFamily: 'BarlowCondensed-Regular', fontSize: 15, color: 'white' }}>
            SELECT
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
          <MCIcons name="cube-outline" size={15} color="white" />
          <Text style={{ fontFamily: 'BarlowCondensed-Regular', fontSize: 12, color: 'white', marginHorizontal: 3 }}>
            {game.mods}
          </Text>
          <MCIcons name="arrow-down-circle-outline" size={15} color="white" />
          <Text style={{ fontFamily: 'BarlowCondensed-Regular', fontSize: 12, color: 'white', marginHorizontal: 3 }}>
            {game.downloads}
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  
});