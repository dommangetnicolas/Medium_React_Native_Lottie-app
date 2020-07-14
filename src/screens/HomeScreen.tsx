import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from 'lottie-react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <LottieView source={require('../assets/animation.json')} autoPlay loop />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
