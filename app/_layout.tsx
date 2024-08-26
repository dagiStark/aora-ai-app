import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { NativeWindStyleSheet } from "nativewind";

SplashScreen.preventAutoHideAsync()

NativeWindStyleSheet.setOutput({
  default: "native",
});

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    // to load from read me
  })

  useEffect(() => {
    if(error) throw error

    if(fontsLoaded) SplashScreen.hideAsync()
  }, [fontsLoaded, error])

  if(!fontsLoaded && !error) return null
  return (

    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* <Stack.Screen name="(auth)" options={{ headerShown: false }} /> */}
    </Stack>
  );
};

export default RootLayout;

