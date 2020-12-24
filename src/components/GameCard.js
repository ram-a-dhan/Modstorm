import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors';

export default function GameCard(props) {
  const { game, width, numColumns } = props;

  const [showSelectButton, setShowSelectButton] = useState(false);
  const [selectButtonAnimation, setSelectButtonAnimation] = useState('slideInUp');
  const [gameStatsAnimation, setGameStatsAnimation] = useState('');

  const handlePressGameCard = () => {
    setGameStatsAnimation('slideOutDown');
  };

  const handleShowSelectButton = () => {
    if (!showSelectButton) {
      setSelectButtonAnimation('slideInUp');
      setShowSelectButton(true);
      setTimeout(() => {
        setSelectButtonAnimation('slideOutDown');
      }, 3000);
    }
  };

  const RenderGameStats = () => (
    <Animatable.View
      style={styles.gameStatsView}
      animation={gameStatsAnimation}
      duration={250}
      onAnimationEnd={() => {
        if (gameStatsAnimation === 'slideOutDown') {
          handleShowSelectButton();
        } else {
          setGameStatsAnimation('');
        }
      }}
    >
      <MCIcons
        name="cube-outline"
        size={15}
        color={colors.ON_BACKGROUND}
      />
      <Text style={styles.gameStatsText}>
        {game.mods}
      </Text>
      <MCIcons
        name="arrow-down-circle-outline"
        size={15}
        color={colors.ON_BACKGROUND}
      />
      <Text style={styles.gameStatsText}>
        {game.downloads}
      </Text>
    </Animatable.View>
  );

  const RenderSelectButton = () => (
    <Animatable.View
      animation={selectButtonAnimation}
      duration={250}
      onAnimationEnd={() => {
        if (selectButtonAnimation === 'slideOutDown') {
          setGameStatsAnimation('slideInUp');
          setShowSelectButton(false);
        }
      }}
    >
      <TouchableNativeFeedback
        background={
          TouchableNativeFeedback
            .Ripple(colors.ON_PRIMARY)
        }
      >
        <View style={styles.selectButton}>
          <Text style={styles.selectButtonText}>
            SELECT
          </Text>
        </View>
      </TouchableNativeFeedback>
    </Animatable.View>
  );

  return (
    <TouchableWithoutFeedback onPress={handlePressGameCard}>
      <ImageBackground
        source={{
          uri: `https://staticdelivery.nexusmods.com`
            +  `/Images/games/4_3`
            +  `/tile_${game.id}.jpg`,
        }}
        style={[
          styles.gameCardBackground,
          { width: width / numColumns },
        ]}
      >
        <TouchableWithoutFeedback onPress={handlePressGameCard}>
          <View style={styles.gameCardView}>
            <Text style={styles.gameTitle}>
              {game.name}
            </Text>
            {
              showSelectButton ? (
                <RenderSelectButton />
              ) : (
                <RenderGameStats />
              )
            }
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  gameCardBackground: {
    aspectRatio: 0.8,
    justifyContent: 'flex-end',
  },
  gameCardView: {
    padding: 10,
    backgroundColor: colors.BACKGROUND + '80',
  },
  gameTitle: {
    fontFamily: 'BarlowCondensed-Medium',
    fontSize: 16,
    color: colors.ON_BACKGROUND,
    marginBottom: 5,
  },
  selectButton: {
    width: '100%',
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.PRIMARY,
  },
  selectButtonText: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 14,
    marginTop: -2,
    color: colors.ON_PRIMARY,
  },
  gameStatsView: {
    height: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  gameStatsText: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 12,
    marginHorizontal: 3,
    color: colors.ON_BACKGROUND,
  },
});