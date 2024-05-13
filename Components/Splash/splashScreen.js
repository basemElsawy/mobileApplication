import { styles } from "../../styles";
import { useEffect, useRef } from "react";
import { View, Text, Image } from "react-native";
import { Animated } from "react-native";
import logoImg from "../../assets/whiteLogo.png";
import blueLogoImg from "../../assets/blueLogo.png";

export default function SplashScreen({
  logoFadeDuration = 700, // Duration of logo fade-out animation (ms)
  backgroundTransitionDuration = 1500, // Duration of background color transition (ms)
  initialBackgroundColor = "#0083DB", // Initial background color (default: blue)
  finalBackgroundColor = "#fff", // Final background color (default: white)
}) {
  const fadeOutAnimation = useRef(new Animated.Value(1)).current;
  const backgroundOpacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    fadeOutHandler();
  }, []);

  const fadeOutHandler = () => {
    Animated.timing(fadeOutAnimation, {
      toValue: 0,
      duration: logoFadeDuration,
      useNativeDriver: true,
    }).start();
    Animated.timing(backgroundOpacity, {
      toValue: 1,
      duration: backgroundTransitionDuration,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Animated.View
        style={{
          position: "absolute",
          left: 100,
          top: 390,
          flex: 1,

          alignContent: "center",
          alignItems: "center",
          opacity: backgroundOpacity,
        }}
      >
        <Image source={blueLogoImg} style={styles.blueLogo} />
      </Animated.View>

      <Animated.View
        style={{
          ...styles.container,
          opacity: fadeOutAnimation,
          backgroundColor: backgroundOpacity.interpolate({
            inputRange: [0, 1],
            outputRange: [initialBackgroundColor, finalBackgroundColor],
          }),
        }}
      >
        <Image source={logoImg} style={styles.Image} />
      </Animated.View>
    </>
  );
}
