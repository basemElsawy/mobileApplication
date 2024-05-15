import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TextInput,
  Pressable,
  Modal,
  Animated,
  TouchableOpacity,
} from "react-native";
import { useRef, useState } from "react";
import image from "../../assets/LogoBlue.png";
import arrow from "../../assets/arrow.png";
import BlueArrow from "../../assets/BlueArrow.png";
import login from "../../assets/LoginIcon.png";
import { useNavigation } from "@react-navigation/native";
import FingerPrint from "../../assets/fingerPrint.png";
import info from "../../assets/exclamationMark.png";
export default function LoginScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const modalAnimation = useRef(new Animated.Value(0)).current;
  const navigator = useNavigation();
  return (
    <>
      <View
        style={[
          styles.mainContainer,
          {
            opacity: modalVisible ? 0.2 : 1,
            backgroundColor: modalVisible
              ? "rgba(0,0,0,0.5)"
              : "rgba(255,255,255,1)",
          },
        ]}
      >
        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="fade"
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(false);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalText}>Finger Print</Text>
                <Pressable
                  style={[styles.button]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>X</Text>
                </Pressable>
              </View>
              <View style={styles.modalBody}>
                <View style={[styles.modalBodyContainer, { gap: 25 }]}>
                  <Pressable
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 15,
                    }}
                  >
                    <Text>Sign In With Your Finger</Text>
                    <Image style={styles.fingerPrint} source={FingerPrint} />
                  </Pressable>
                  <View
                    style={[
                      styles.signInContainer,
                      {
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 15,
                        width: "100%",
                      },
                    ]}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        navigator.navigate("homePage");
                        setModalVisible(false);
                      }}
                      style={[
                        styles.signInObj,
                        { paddingVertical: 12, width: "100%", borderRadius: 5 },
                      ]}
                    >
                      <Text
                        style={[
                          styles.SignInText,
                          {
                            textAlign: "center",
                            color: "white",
                            fontSize: "21px",
                          },
                        ]}
                      >
                        Sign In
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        navigator.navigate("homePage");
                        setModalVisible(false);
                      }}
                    >
                      <Text style={[styles.noFingerPrint]}>
                        Proceed Without Finger Print
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.modalFooter}>
                <Image source={info} style={styles.exclamation} />
                <Text style={{ fontSize: 12 }}>
                  if your not in the diameter of the company proceed without
                  fingerprint
                </Text>
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.header}>
          <Image source={image} />
        </View>
        <View style={styles.formContainer}>
          <Text style={{ marginVertical: 15, fontSize: 16, color: "grey" }}>
            Login To Your Account
          </Text>
          <TextInput style={styles.textInputs} placeholder="EmployeeCode" />
          <TextInput
            secureTextEntry
            style={styles.textInputs}
            placeholder="Password"
          />
          <TouchableOpacity
            style={styles.pressableContainer}
            activeOpacity={0.7}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Text style={{ color: "white" }}>Login</Text>
            <Image source={login} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            paddingHorizontal: 50,
          }}
        >
          <View
            style={{
              width: "100%",
              borderColor: "#0083DB",
              borderWidth: "1.5px",
              borderRadius: 5,
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: 10,
            }}
          >
            <Image
              style={{ transform: [{ rotate: "180deg" }] }}
              source={BlueArrow}
            />
            <Button
              onPress={() => {
                navigator.navigate("onBoarding");
              }}
              title="Go Back"
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    flexDirection: "column",
    paddingTop: 100,
    paddingBottom: 60,
  },
  noFingerPrint: {
    color: "#0083DB",
    textDecorationLine: "underline",
  },
  signInObj: {
    backgroundColor: "#0083DB",
    padding: 20,
  },
  fingerPrint: {
    width: 130,
    height: 100,
    resizeMode: "contain",
  },
  formContainer: {
    width: "100%",
    paddingHorizontal: 50,
  },
  textInputs: {
    width: "100%",
    marginVertical: 5,
    borderColor: "#0083DB",
    borderWidth: "1.5px",
    padding: 10,
    borderRadius: 5,
  },
  modalBodyContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  pressableContainer: {
    marginVertical: 30,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0083DB",
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderRadius: 5,
    flexDirection: "row",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 22,
    padding: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    width: "100%",
    height: "50%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalFooter: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  modalHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0083DB",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    // marginBottom: 15,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
