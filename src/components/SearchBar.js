import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  TouchableNativeFeedback,
} from 'react-native';
import ADIcons from 'react-native-vector-icons/AntDesign';
import colors from '../assets/colors';

export default function SearchBar(props) {
  const { scrollPosition, setShowSearchBar, setShowFAB, inputRef } = props;

  const { width } = useWindowDimensions();

  return (
    <View style={styles.searchBarView}>
      <TextInput
        style={[styles.searchBarInput, { width: width - 170 }]}
        placeholder="Search Game"
        placeholderTextColor={colors.ON_SYSTEM_VARIANT}
        onFocus={() => {
          scrollPosition.current.scrollToLocation({
            sectionIndex: 0,
            itemIndex: 0,
          });
        }}
        ref={inputRef}
      />
      <View style={styles.searchBarButtonGroup}>
        <TouchableNativeFeedback
          background={
            TouchableNativeFeedback
              .Ripple(colors.ON_SYSTEM, true, 25)
          }
        >
          <View style={styles.searchBarButton}>
            <ADIcons name="left" size={20} color={colors.ON_SYSTEM} />
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          background={
            TouchableNativeFeedback
              .Ripple(colors.ON_SYSTEM, true, 25)
          }
        >
          <View style={styles.searchBarButton}>
            <ADIcons name="search1" size={20} color={colors.ON_SYSTEM} />
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          background={
            TouchableNativeFeedback
              .Ripple(colors.ON_SYSTEM, true, 25)
          }
          onPress={() => {
            setShowSearchBar(false);
            setShowFAB(true);
          }}
        >
          <View style={styles.searchBarButton}>
            <ADIcons name="close" size={20} color={colors.ON_SYSTEM} />
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarView: {
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
    marginVertical: 7
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