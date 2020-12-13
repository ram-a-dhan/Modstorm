import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  SectionList,
} from 'react-native';
import GameBanner from '../components/GameBanner';
import SearchBar from '../components/SearchBar';
import GameCard from '../components/GameCard';
import listOfGames from '../assets/listOfGames';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Games() {
  const { width, height } = useWindowDimensions();
  
  const [numColumns, setNumColumns] = useState(3);

  useEffect(() => {
    setNumColumns(Math.round(width / 150));
  }, [width, height]);

  const renderStickyHeader = () => (
    <>
      {/* <SearchBar searchBarHeight={50} /> */}
      <View style={styles.allGamesTitleView}>
        <Text style={styles.allGamesTitleText}>
          All Games
        </Text>
        <View style={styles.sortButtonGroup}>
          <TouchableOpacity>
            <MCIcons name="package-variant-closed" size={25} color="black" />
          </TouchableOpacity>
          <View style={{ width: 10 }} />
          <TouchableOpacity>
            <MCIcons name="sort-variant" size={25} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );

  const renderGameCards = ({ section, index }) => {
    if (index % numColumns !== 0) return null;

    const items = [];

    for (let i = index; i < index + numColumns; i++) {
      if (i >= section.data.length) {
        break;
      }
      items.push(
        <GameCard
          key={section.data[i].id.toString()}
          game={section.data[i]}
          width={width}
          numColumns={numColumns}
        />
      );
    }

    return (
      <View style={{ flexDirection: 'row' }}>
        {items}
      </View>
    );
  };

  return (
    <>
      <SectionList
        ListHeaderComponent={() => (
          <GameBanner
            selectedGame={listOfGames[0]}
            height={height}
            searchBarHeight={0}
          />
        )}
        renderSectionHeader={renderStickyHeader}
        stickySectionHeadersEnabled
        sections={[{ data: listOfGames }]}
        keyExtractor={item => item.id.toString()}
        renderItem={renderGameCards}
        ListFooterComponent={() => (
          <View style={{ width: '100%', height: (width / numColumns) / 0.8 }} />
        )}
      />
      {/* <SearchBar searchBarHeight={50} /> */}
    </>
  );
}

const styles = StyleSheet.create({
  allGamesTitleView: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    backgroundColor: 'white',
  },
  allGamesTitleText: {
    fontFamily: 'BarlowCondensed-Medium',
    fontSize: 25,
    margin: 0,
    padding: 0,
  },
  sortButtonGroup: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
});