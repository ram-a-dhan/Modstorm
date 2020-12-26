import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  TouchableNativeFeedback,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import ADIcons from 'react-native-vector-icons/AntDesign';
import colors from '../assets/colors';

export default function SearchBar(props) {
  const { setShowSearchBar, setShowFAB, scrollRef, inputRef } = props;

  const { width } = useWindowDimensions();

  const [searchBarAnimation, setSearchBarAnimation] = useState('slideInUp');

  const rippleEffect =
    TouchableNativeFeedback
      .Ripple(colors.ON_SYSTEM, true, 25);

  const handleClose = () => {
    inputRef.current.blur();
    setSearchBarAnimation('slideOutDown');
    setShowFAB(true);
  };

  return (
    <Animatable.View
      style={styles.searchBarView}
      animation={searchBarAnimation}
      onAnimationEnd={() => {
        if (searchBarAnimation === 'slideOutDown') {
          setShowSearchBar(false);
        }
      }}
      useNativeDriver
    >
      <TextInput
        style={[
          styles.searchBarInput,
          { width: width - 170 },
        ]}
        ref={inputRef}
        placeholder="Search Game"
        placeholderTextColor={colors.ON_SYSTEM_VARIANT}
        onFocus={() => {
          scrollRef.current.scrollToLocation({
            sectionIndex: 0,
            itemIndex: 0,
          });
        }}
      />
      <View style={styles.searchBarButtonGroup}>
        <TouchableNativeFeedback
          background={rippleEffect}
          onPress={() => {}}
        >
          <View style={styles.searchBarButton}>
            <ADIcons
              name="left"
              size={20}
              color={colors.ON_SYSTEM}
            />
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          background={rippleEffect}
          onPress={() => {}}
        >
          <View style={styles.searchBarButton}>
            <ADIcons
              name="search1"
              size={20}
              color={colors.ON_SYSTEM}
            />
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          background={rippleEffect}
          onPress={handleClose}
        >
          <View style={styles.searchBarButton}>
            <ADIcons
              name="close"
              size={20}
              color={colors.ON_SYSTEM}
            />
          </View>
        </TouchableNativeFeedback>
      </View>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  searchBarView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    backgroundColor: colors.SYSTEM,
  },
  searchBarInput: {
    fontSize: 16,
    padding: 0,
    color: colors.ON_SYSTEM,
    borderBottomColor: colors.ON_SYSTEM_VARIANT,
    borderBottomWidth: 2,
    marginLeft: 15,
    marginRight: 5,
    marginVertical: 7,
  },
  searchBarButtonGroup: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  searchBarButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});