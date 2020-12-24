import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  useWindowDimensions,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ADIcons from 'react-native-vector-icons/AntDesign';
import colors from '../assets/colors';

export default function SearchBar({ scrollPosition, setShowSearchBar, setShowFAB, inputRef }) {
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
        <TouchableOpacity
          style={styles.searchBarButton}
        >
          <ADIcons name="left" size={20} color={colors.ON_SYSTEM} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.searchBarButton}
        >
          <ADIcons name="search1" size={20} color={colors.ON_SYSTEM} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.searchBarButton}
          onPress={() => {
            setShowSearchBar(false);
            setShowFAB(true);
          }}
        >
          <ADIcons name="close" size={20} color={colors.ON_SYSTEM} />
        </TouchableOpacity>
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