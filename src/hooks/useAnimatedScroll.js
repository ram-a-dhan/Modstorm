import { Animated } from 'react-native';

export default function useAnimatedScroll(config) {
  const { parallax, fade } = config;

  const animatedScroll = new Animated.Value(0);
  
  const scrollParallax = animatedScroll.interpolate({
    inputRange: parallax.inputRange,
    outputRange: parallax.outputRange,
    extrapolate: 'clamp',
  });

  const scrollFade = animatedScroll.interpolate({
    inputRange: fade.inputRange,
    outputRange: fade.outputRange,
    extrapolate: 'clamp',
  });

  return {
    animatedScroll,
    scrollParallax,
    scrollFade,
  };
}
