import React, {
  useState,
  useEffect,
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  ImageBackground,
  TextInput,
  FlatList,
  LogBox,
} from 'react-native';
import {
  TouchableOpacity,
} from 'react-native-gesture-handler';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import listOfGames from '../assets/listOfGames';

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation'
]);

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
      <ImageBackground
        source={{ uri: `https://staticdelivery.nexusmods.com/Images/games/4_3/tile_${110}.jpg` }}
        style={{ width: '100%', height: (height * 0.5) - 50, justifyContent: 'flex-end', alignItems: 'center' }}
      >
        <View style={{ margin: 25 }}>
          <Text style={{ fontFamily: 'BarlowCondensed-Regular', fontSize: 20, textAlign: 'center', color: 'white' }}>Selected Game:</Text>
          <Text style={{ fontFamily: 'BarlowCondensed-Medium', fontSize: 40, textAlign: 'center', color: 'white' }}>SKYRIM</Text>
        </View>
      </ImageBackground>
      <View style={{ backgroundColor: 'black', width: '100%', height: 50 }}>
        <TextInput placeholder="Search Game" style={{ textAlign: 'center', color: 'white', fontSize: 18 }} placeholderTextColor="darkgrey" />
      </View>
      <FlatList
        ListHeaderComponent={() => (
          <View style={{ width: '100%', height: 50, marginBottom: 5, paddingHorizontal: 25, justifyContent: 'center' }}>
            <Text style={{ fontFamily: 'BarlowCondensed-Medium', fontSize: 28 }}>All Games</Text>
          </View>
        )}
        data={listOfGames}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ImageBackground
            key={item.id.toString()}
            source={{ uri: `https://staticdelivery.nexusmods.com/Images/games/4_3/tile_${item.id}.jpg` }}
            style={{ width: width / numColumns, aspectRatio: 0.8, justifyContent: 'flex-end' }}
          >
            <View style={{ padding: 10, backgroundColor: '#00000080' }}>
              <Text style={{ fontFamily: 'BarlowCondensed-Medium', fontSize: 15, color: 'white', marginBottom: 5 }}>
                {item.name}
              </Text>
              <TouchableOpacity style={{ width: '100%', height: 20, backgroundColor: '#80808080', justifyContent: 'center', alignItems: 'center', marginBottom: 5 }}>
                <Text style={{ fontFamily: 'BarlowCondensed-Regular', fontSize: 15, color: 'white' }}>
                  SELECT
                </Text>
              </TouchableOpacity>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <MCIcons name="cube-outline" size={15} color="white" />
                <Text style={{ fontFamily: 'BarlowCondensed-Regular', fontSize: 12, color: 'white', marginHorizontal: 3 }}>
                  {item.mods}
                </Text>
                <MCIcons name="arrow-down-circle-outline" size={15} color="white" />
                <Text style={{ fontFamily: 'BarlowCondensed-Regular', fontSize: 12, color: 'white', marginHorizontal: 3 }}>
                  {item.downloads}
                </Text>
              </View>
            </View>
          </ImageBackground>
        )}
        numColumns={numColumns}
        key={numColumns}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});