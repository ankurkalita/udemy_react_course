import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Hello</Text>
      <Button
      title = "Tap Me to go to Component screen"
      onPress = {() => {
          console.log("Button Pressed");
        }
      }/>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
