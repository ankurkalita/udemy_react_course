import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Hello</Text>
      <Button
      title = "Tap Me to go to Component screen"
      onPress = {() => {
          console.log("Button Pressed");
          props.navigation.navigate('Components');
        }
      }/>
      <TouchableOpacity onPress = { () => {
           props.navigation.navigate("List");
          }
        }>
        <Text>Tap me to go to List screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
