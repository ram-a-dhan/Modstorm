import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  FlatList,
  LogBox,
} from 'react-native';
import GameCard from '../components/GameCard';
import listOfGames from '../assets/listOfGames';
import SearchBar from '../components/SearchBar';
import GameBanner from '../components/GameBanner';

LogBox.ignoreLogs([/VirtualizedLists/]);

export default function Games() {
  const { width, height } = useWindowDimensions();
  
  const [numColumns, setNumColumns] = useState(3);

  useEffect(() => {
    if (width > height) {
      setNumColumns(5);
    } else {
      setNumColumns(3);
    }
  }, [width, height])

  return (
    <ScrollView stickyHeaderIndices={[1]}>
      <GameBanner
        selectedGame={listOfGames[0]}
        height={height}
        searchBarHeight={50}
      />
      <SearchBar searchBarHeight={50} />
      <FlatList
        ListHeaderComponent={() => (
          <View style={{ width: '100%', height: 50, marginBottom: 5, paddingHorizontal: 25, justifyContent: 'center' }}>
            <Text style={{ fontFamily: 'BarlowCondensed-Medium', fontSize: 28 }}>
              All Games
            </Text>
          </View>
        )}
        data={listOfGames}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <GameCard
            game={item}
            width={width}
            numColumns={numColumns}
          />
        )}
        numColumns={numColumns}
        key={numColumns}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
});