import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  Button,
  FlatList,
  ImageBackground,
  StyleSheet,
} from "react-native";
import unknown from "../../assets/Unknown_person.jpg";
import notification from "../../assets/notification.png";
import search from "../../assets/Search.png";
import hamburger from "../../assets/Hamburger.png";
import fingerPrint from "../../assets/fingerPrint.png";
let DUMMY_REQUESTS = [{}];

export default function HomePage() {
  const [notificationNum, setNotifications] = useState(0);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.bgImageWrapper}>
        <View style={styles.bgImageContainer}>
          <ImageBackground
            style={styles.backgroundImage}
            source={require("../../assets/HomePageHeader.png")}
          >
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                width: "100%",
                paddingHorizontal: 18,
              }}
            >
              <View style={styles.SearchContainer}>
                <Image style={styles.searchImage} source={search} />
              </View>
              <View style={styles.iconsWrapper}>
                <View style={styles.iconContainer}>
                  <View
                    style={{
                      position: "absolute",
                      justifyContent: "center",
                      alignItems: "center",
                      top: -10,
                      right: 0,
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  >
                    <Text
                      style={{
                        paddingHorizontal: 6,
                        paddingVertical: 3,
                        zIndex: 100,
                        backgroundColor: "red",
                        borderRadius: "50%",
                        //   overflow: "hidden",
                        color: "white",
                      }}
                    >
                      {notificationNum}
                    </Text>
                  </View>

                  <Image source={notification} />
                </View>
                <View style={styles.iconContainer}>
                  <Image style={{ height: 20, width: 20 }} source={hamburger} />
                </View>
                <View
                  style={[
                    styles.iconContainer,
                    { padding: 0, borderRadius: "50%", overflow: "hidden" },
                  ]}
                >
                  <Image style={styles.personImage} source={unknown} />
                </View>
              </View>
            </View>
            <View style={{ width: "100%", paddingHorizontal: 24 }}>
              <Text
                style={{
                  textAlign: "left",
                  width: "100%",
                  fontSize: 36,
                  fontWeight: "bold",
                  color: "#0083DB",
                }}
              >
                Welcome
              </Text>
              <Text
                style={{
                  paddingHorizontal: 32,
                  fontSize: 24,
                  fontWeight: "400",
                  color: "#999999",
                }}
              >
                Basem Elsawy
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
      <View style={{ flex: 0.12, padding: 30 }}>
        <View style={styles.locationStatus}>
          <Text style={{ fontSize: 16, fontWeight: "700", color: "#0083DB" }}>
            Location Status
          </Text>
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              height: "100%",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "300", color: "#0083DB" }}>
              Away From Company
            </Text>
            <Image source={fingerPrint} style={{ width: 30, height: 30 }} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  SearchContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    overflow: "visible",
    borderRadius: "50%",
    shadowColor: "black",
    shadowOpacity: 0.15,

    shadowRadius: 2,
  },
  locationStatus: {
    flex: 1,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 10,
    justifyContent: "space-between ",
  },
  searchImage: {
    width: 22,
    overflow: "visible",
  },
  bgImageWrapper: {
    flex: 0.27,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  bgImageContainer: {
    flex: 1,
    height: "25%",

    borderRadius: 25,
    overflow: "hidden",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 46,
    paddingBottom: 20,
  },
  iconContainer: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    padding: 8,
    position: "relative",
  },
  personImage: {
    width: 70,
    height: 70,

    // aspectRatio: 1,
  },
  iconsWrapper: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
