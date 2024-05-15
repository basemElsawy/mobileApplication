import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import LoginScreen from "./Components/LoginScreen/LoginScreen";
import SplashScreen from "./Components/Splash/splashScreen";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import OnBoarding from "./Components/Onboarding/OnBoarding";
import HomePage from "./Components/HomePage/HomePage";
export default function App() {
  const [isLoadingApp, setIsLoading] = useState(true);
  const Stack = createStackNavigator();
  useEffect(() => {
    // Simulate app loading for 2 seconds (replace with actual logic)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      {isLoadingApp ? (
        <SplashScreen />
      ) : (
        <Stack.Navigator>
          {/* <Stack.Screen name="Home" component={Home} /> */}
          <Stack.Screen
            name="onBoarding"
            component={OnBoarding}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="loginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="homePage"
            component={HomePage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

/*
----View component is used to "View" text or buttons or wrap other elements 

----Core Component(<View></View> - <Text></Text> - <Image></Image> - <ScrollView></ScrollView> - <TextInput></TextInput> )

ImageBackGround component to wrap certain content in a background image

*/
