import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hello</Text>
      <Button
      title = "Tap Me to go to Component screen"
      onPress = {() => {
          console.log("Button Pressed");
          navigation.navigate('Components');
        }
      }/>

      <Button
        title = "Tap me to go to List Screen"
        onPress = {() => {
           navigation.navigate("List");
        }
      }
      />

      <Button
        title="Tap me to go to Image Screen"
        onPress={() => {
          navigation.navigate("ImageScreen");
        }
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
