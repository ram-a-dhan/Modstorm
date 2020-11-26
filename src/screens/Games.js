import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import listOfGames from '../assets/listOfGames';

export default function Games() {
  const { height } = useWindowDimensions();

  return (
    <View style={[styles.center, { /* backgroundColor: '#383838' */ }]}>
      <ImageBackground
        source={{ uri: `https://staticdelivery.nexusmods.com/Images/games/4_3/tile_${110}.jpg` }}
        style={{ width: '100%', height: (height * 0.5) - 50 }}
      />
      <View style={{ backgroundColor: 'black', width: '100%', height: 50 }}>
        <TextInput placeholder="Search Game" style={{ textAlign: 'center', color: 'white', fontSize: 18 }} placeholderTextColor="darkgrey" />
      </View>
      <FlatGrid
        contentContainerStyle={{ width: '100%', marginTop: -25 }}
        ListHeaderComponent={() => (
          <View style={{ width: '100%', height: 50, marginBottom: 5, paddingHorizontal: 25, justifyContent: 'center' }}>
            <Text style={{ fontFamily: 'BarlowCondensed-Medium', fontSize: 28 }}>All Games</Text>
          </View>
        )}
        data={listOfGames}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ImageBackground
            source={{ uri: `https://staticdelivery.nexusmods.com/Images/games/4_3/tile_${item.id}.jpg` }}
            style={{ width: 150, aspectRatio: 0.8 }}
          />
        )}
        itemDimension={150}
        spacing={25}
        itemContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});