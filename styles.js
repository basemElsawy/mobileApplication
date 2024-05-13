import { StyleSheet } from "react-native";

let primaryColor = "#0083DB";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
    padding: 60,
    width: "100%",
    position: "relative",

    justifyContent: "center",
    alignItems: "center",
  },
  bgImage: {
    justifyContent: "center",
    alignItems: "center",

    width: 200,
    height: 200,
  },
  Image: {
    width: 120,
    overflow: "visible",
    // aspectRatio: "1",
  },

  button: {
    backgroundColor: "black",

    borderRadius: "5px",
    marginTop: 10,
  },
  text: {
    fontSize: 64,

    color: "white",
    textTransform: "capitalize",
  },

  childContainer_1: {
    width: 200,
    height: 200,
    backgroundColor: "white",
  },

  childContainer_2: {
    width: 200,
    height: 200,
    backgroundColor: "lightblue",
  },
  blueLogo: {
    width: 230,
    overflow: "visible",

    // transform: `translate(-50vh, -50vh)`,
  },
});
