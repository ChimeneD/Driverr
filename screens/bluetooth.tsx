import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import useBLE from "../hooks/useBLE";

const BlueTooth = () => {
  const { requestPermissions, scanForDevices } = useBLE();
  const openModal = () => {
    requestPermissions((isGranted: boolean) => {
      if (isGranted) {
        scanForDevices();
      }
    });
  };
  return (
    <View style={styles.container}>
      <Text>BlueTooth</Text>
      <TouchableOpacity onPress={openModal}>
        <Text>{"Connect"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BlueTooth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
