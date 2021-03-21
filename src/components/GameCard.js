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
import LinearGradient from 'react-native-linear-gradient';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import approx from 'approximate-number';
import colors from '../assets/colors';

export default function GameCard(props) {
  const { game, width, cardWidth, numColumns } = props;

  const [showSelectButton, setShowSelectButton] = useState(false);
  const [selectButtonAnimation, setSelectButtonAnimation] = useState('slideInUp');
  const [gameStatsAnimation, setGameStatsAnimation] = useState('');

  const rippleEffect =
    TouchableNativeFeedback
      .Ripple(colors.ON_PRIMARY);

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
      style={[styles.gameStatsView, { height: cardWidth / 10 }]}
      animation={gameStatsAnimation}
      duration={250}
      onAnimationEnd={() => {
        if (gameStatsAnimation === 'slideOutDown') {
          handleShowSelectButton();
        } else {
          setGameStatsAnimation('');
        }
      }}
      useNativeDriver
    >
      <MCIcons
        name="cube-outline"
        size={(cardWidth / 10) - 2}
        color={colors.ON_BACKGROUND}
      />
      <Text style={[styles.gameStatsText, { fontSize: (cardWidth / 10) - 4 }]}>
        {approx(game.mods)}
      </Text>
      <MCIcons
        name="arrow-down-circle-outline"
        size={(cardWidth / 10) - 2}
        color={colors.ON_BACKGROUND}
      />
      <Text style={[styles.gameStatsText, { fontSize: (cardWidth / 10) - 4 }]}>
        {approx(game.downloads)}
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
      useNativeDriver
    >
      <TouchableNativeFeedback
        background={rippleEffect}
        onPress={() => {}}
      >
        <View style={[styles.selectButton, { height: cardWidth / 10 }]}>
          <Text style={[styles.selectButtonText, { fontSize: (cardWidth / 10) - 2 }]}>
            SELECT
          </Text>
        </View>
      </TouchableNativeFeedback>
    </Animatable.View>
  );

  return (
    <TouchableWithoutFeedback onPress={handlePressGameCard}>
      <ImageBackground
        style={[
          styles.gameCardBackground,
          { width: width / numColumns },
        ]}
        source={{
          uri: `https://staticdelivery.nexusmods.com`
            +  `/Images/games/4_3`
            +  `/tile_${game.id}.jpg`,
        }}
      >
        <TouchableWithoutFeedback onPress={handlePressGameCard}>
          <LinearGradient
            style={styles.gameCardView}
            colors={[
              colors.BACKGROUND + '00',
              colors.BACKGROUND + 'AA',
              colors.BACKGROUND + 'FF',
            ]}
            locations={[0, 0.3, 0.9]}
          >
            <Text style={[styles.gameTitle, { fontSize: cardWidth / 10 }]}>
              {game.name}
            </Text>
            {
              showSelectButton ? (
                <RenderSelectButton />
              ) : (
                <RenderGameStats />
              )
            }
          </LinearGradient>
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
    marginBottom: -1,
  },
  gameTitle: {
    fontFamily: 'BarlowCondensed-Medium',
    // fontSize: 16,
    color: colors.ON_BACKGROUND,
    marginBottom: 5,
  },
  selectButton: {
    width: '100%',
    // height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.PRIMARY,
  },
  selectButtonText: {
    fontFamily: 'BarlowCondensed-Regular',
    // fontSize: 14,
    marginTop: -2,
    color: colors.ON_PRIMARY,
  },
  gameStatsView: {
    // height: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  gameStatsText: {
    fontFamily: 'BarlowCondensed-Regular',
    // fontSize: 12,
    marginHorizontal: 3,
    color: colors.ON_BACKGROUND,
  },
});