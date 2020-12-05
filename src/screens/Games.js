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
import GameBanner from '../components/GameBanner';
import SearchBar from '../components/SearchBar';
import GameCard from '../components/GameCard';
import listOfGames from '../assets/listOfGames';

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
          <View style={styles.allGamesTitleView}>
            <Text style={styles.allGamesTitleText}>
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
  allGamesTitleView: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 25,
    marginBottom: 5,
  },
  allGamesTitleText: {
    fontFamily: 'BarlowCondensed-Medium',
    fontSize: 28,
  },
});