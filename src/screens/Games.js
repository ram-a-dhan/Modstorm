import React, {
  useState,
  useEffect,
  useRef,
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableNativeFeedback,
  FlatList,
  Animated,
} from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ADIcons from 'react-native-vector-icons/AntDesign';
import FAB from 'react-native-fab';
import LinearGradient from 'react-native-linear-gradient';
import useAnimatedScroll from '../hooks/useAnimatedScroll';
import GameBanner from '../components/GameBanner';
import GameCard from '../components/GameCard';
import SearchBar from '../components/SearchBar';
import colors from '../assets/colors';
import listOfGames from '../assets/listOfGames';

export default function Games() {
  const { width, height } = useWindowDimensions();
  
  const [numColumns, setNumColumns] = useState(3);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showFAB, setShowFAB] = useState(true);
  
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  useScrollToTop(scrollRef);

  const {
    animatedScroll,
    scrollParallax,
    scrollFade,
  } = useAnimatedScroll({
    parallax: {
      inputRange: [0, height * 0.5],
      outputRange: [0, -(height * 0.5) / 2],
    },
    fade: {
      inputRange: [height * 0.165, height * 0.5],
      outputRange: [0, 1],
    },
  });

  useEffect(() => {
    setNumColumns(Math.round(width / 150));
  }, [width, height]);

  const renderStickyHeader = () => (
    <View style={styles.headerTitleView}>
      <Text style={styles.headerTitleText}>
        All Games
      </Text>
      <View style={styles.sortButtonGroup}>
        <TouchableNativeFeedback
          background={
            TouchableNativeFeedback
              .Ripple(colors.ON_BACKGROUND, true, 25)
          }
        >
          <View style={styles.sortButton}>
            <MCIcons
              name="package-variant-closed"
              size={25}
              color={colors.ON_BACKGROUND}
            />
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          background={
            TouchableNativeFeedback
              .Ripple(colors.ON_BACKGROUND, true, 25)
          }
        >
          <View style={styles.sortButton}>
            <MCIcons
              name="sort-variant"
              size={25}
              color={colors.ON_BACKGROUND}
            />
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );

  const renderGameCards = ({ section, index }) => {
    if (index !== 0) return null;

    return (
      <View style={{ backgroundColor: colors.BACKGROUND }}>
        <FlatList
          data={section.data}
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
      </View>
    )
  };

  const renderBottomSpace = () => (
    <LinearGradient
      colors={[
        colors.BACKGROUND,
        colors.SYSTEM,
      ]}
      style={styles.bottomSpace}
    />
  );

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.bannerContainer, {
          transform: [{ translateY: scrollParallax }]
        }]}>
        <GameBanner
          selectedGame={listOfGames[0]}
          height={height}
        />
      </Animated.View>
      <Animated.View
        style={[styles.bannerContainer, {
          height: height * 0.5,
          backgroundColor: colors.BACKGROUND,
          opacity: scrollFade,
        }]}
      />
      <Animated.SectionList
        ListHeaderComponent={() => (
          <View
            style={{
              width: '100%',
              height: height * 0.5,
            }}
          />
        )}
        renderSectionHeader={renderStickyHeader}
        stickySectionHeadersEnabled
        sections={[{ data: listOfGames }]}
        keyExtractor={item => item.id.toString()}
        renderItem={renderGameCards}
        ListFooterComponent={renderBottomSpace}
        ref={scrollRef}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: animatedScroll }} }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={8}
      />
      {
        showSearchBar && (
          <SearchBar
            scrollPosition={scrollRef}
            setShowSearchBar={setShowSearchBar}
            setShowFAB={setShowFAB}
            inputRef={inputRef}
          />
        )
      }
      <FAB
        buttonColor={colors.PRIMARY}
        iconTextColor={colors.ON_PRIMARY}
        onClickAction={() => {
          setShowSearchBar(true);
          setShowFAB(false);
          setTimeout(() => {
            inputRef.current.focus();
          }, 100);
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
    backgroundColor: colors.BACKGROUND,
  },
  bannerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  headerTitleView: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    backgroundColor: colors.BACKGROUND,
  },
  headerTitleText: {
    fontFamily: 'BarlowCondensed-Medium',
    fontSize: 25,
    margin: 0,
    padding: 0,
    color: colors.ON_BACKGROUND,
  },
  sortButtonGroup: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  sortButton: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSpace: {
    width: '100%',
    height: 100,
  },
});