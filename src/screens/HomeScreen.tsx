import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import { StyleSheet, View, Button } from "react-native";
import LottieView from "lottie-react-native";

const HomeScreen = () => {
  const ref = useRef<LottieView>(null);

  const onPlay = () => {
    if (ref.current) {
      ref.current.play();
    }
  };

  const onPause = () => {
    if (ref.current) {
      ref.current.pause();
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <LottieView
        ref={ref}
        source={require("../assets/animation.json")}
        style={styles.lottieView}
        loop
      />

      <View style={styles.buttonContainer}>
        <Button title="Play" onPress={onPlay}></Button>
        <Button title="Pause" onPress={onPause}></Button>
      </View>
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
  lottieView: {
    height: 300,
    width: 300,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
