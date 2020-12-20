import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  SectionList,
} from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FAB from 'react-native-fab';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ADIcons from 'react-native-vector-icons/AntDesign';
import GameBanner from '../components/GameBanner';
import GameCard from '../components/GameCard';
import SearchBar from '../components/SearchBar';
import listOfGames from '../assets/listOfGames';

export default function Games() {
  const { width, height } = useWindowDimensions();
  
  const [numColumns, setNumColumns] = useState(3);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showFAB, setShowFAB] = useState(true);
  
  const sectionRef = useRef(null);

  useScrollToTop(sectionRef);

  useEffect(() => {
    setNumColumns(Math.round(width / 150));
  }, [width, height]);

  const renderStickyHeader = () => (
    <View style={styles.headerTitleView}>
      <Text style={styles.headerTitleText}>
        All Games
      </Text>
      <View style={styles.sortButtonGroup}>
        <TouchableOpacity style={styles.sortButton}>
          <MCIcons name="package-variant-closed" size={25} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortButton}>
          <MCIcons name="sort-variant" size={25} color="black" />
        </TouchableOpacity>
      </View>
    </View>
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
    <View style={styles.container}>
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
          <View
            style={{
              width: '100%',
              height: (width / numColumns) / 0.8,
            }}
          />
        )}
        ref={sectionRef}
      />
      {
        showSearchBar && (
          <SearchBar
            scrollPosition={sectionRef}
            setShowSearchBar={setShowSearchBar}
            setShowFAB={setShowFAB}
          />
        )
      }
      <FAB
        buttonColor="dodgerblue"
        iconTextColor="white"
        onClickAction={() => {
          setShowSearchBar(true);
          setShowFAB(false);
        }}
        visible={showFAB}
        iconTextComponent={
          <ADIcons name="search1" />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  headerTitleView: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    backgroundColor: 'white',
  },
  headerTitleText: {
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
  sortButton: {
    width: 36,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});