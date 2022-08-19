import React, { useState } from 'react';
import ContentView from '../components/content-view';
import Constants from 'expo-constants';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { StatusBar } from 'expo-status-bar';
import { Switch } from 'react-native-paper';

const HomeScreen = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const changeMode = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  return (
    <View style={styles.container}>
      <StatusBar /*style='dark'*/ />
      <Text>The home screens</Text>
      <View style={styles.autoSwitch}>
        <Text>Automatic Mode</Text>
        <Switch value={isSwitchOn} onValueChange={changeMode} />
      </View>
      <ContentView />
    </View>
  );
};

export default HomeScreen;

const { background } = colors;
const styles = StyleSheet.create({
  container: {
    backgroundColor: background,
    flex: 1,
    padding: 5,
    paddingTop: Constants.statusBarHeight + 10
  },
  autoSwitch: {
    display: 'flex',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: background
  }
});
