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

export default function LoginScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const modalAnimation = useRef(new Animated.Value(0)).current;
  return (
    <>
      <View style={styles.mainContainer}>
        <Modal
          transparent={true}
          visible={modalVisible}
          animationIn="slideInLeft"
          animationOut="slideOutRight"
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <Animated.View></Animated.View>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
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
              setModalVisible((prev) => !prev);
            }}
          >
            <Text style={{ color: "white" }}>Login</Text>
            <Text style={{ color: "white" }}>{">"}</Text>
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
            }}
          >
            <Button title="Go Back" />
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
    flexDirection: "column",
    paddingVertical: 100,
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
    padding: 40,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
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
    marginBottom: 15,
    textAlign: "center",
  },
});
