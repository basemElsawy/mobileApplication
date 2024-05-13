import {
  StyleSheet,
  View,
  Text,
  Animated,
  FlatList,
  Button,
} from "react-native";
import { useState, useRef } from "react";
import OnBoardingItem from "./OnboardingItem";
import Paginator from "./Paginator";
import { useNavigation } from "@react-navigation/native";
// import { slides } from "./slides";
const slides = [
  {
    id: 1,
    text: "Track down your progress in a simple understandable graph structure",
    image: require("../../assets/GraphOnBoarding.png"),
  },
  {
    id: 2,
    text: "Finger Print support to ease up the time managment for each employee",
    image: require("../../assets/Attendance.png"),
  },
  {
    id: 3,
    text: "Oppertunities to learn more and complete libraries recommended for your weak points",
    image: require("../../assets/Learning.png"),
  },
];

export default function OnBoarding() {
  const [currentIndex, setCurrentIndex] = useState();
  const navigate = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slideRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      console.log("last item");
      navigate.navigate("loginScreen");
    }
  };
  return (
    <View style={styles.onBoarding_wrapper}>
      <View
        style={{
          flex: 3,
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <FlatList
          data={slides}
          renderItem={(item) => <OnBoardingItem item={item} />}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slideRef}
        />
        <View style={{ position: "absolute", top: "70%" }}>
          <Paginator data={slides} scrollX={scrollX} />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.skipBtn}>
          <Button
            onPress={() => {
              navigate.navigate("loginScreen");
            }}
            decoration="underline"
            title="Skip"
          />
        </View>
        <View style={styles.blueBtn}>
          <Button color={"#fff"} onPress={scrollTo} title=">" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  onBoarding_wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    // flex: 1,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: 60,
    paddingHorizontal: 32,
  },
  skipBtn: {
    textDecorationLine: "underline",
  },
  blueBtn: {
    color: "#fff",
    backgroundColor: "#0083DB",
    borderRadius: "4px",
    paddingHorizontal: 12,
    paddingVertical: 3,
  },
});
