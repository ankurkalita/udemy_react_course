import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const greetings = <Text>Bye There!!</Text>;
const name = 'Ankur';

const ComponentsScreen = () =>{
    return (
        <View>
        <Text style={styles.textStyle}>Getting started with react native</Text>
        <Text style = {styles.subheading}>Hello My name is {name}</Text>
        </View>
        );
};

const styles = StyleSheet.create({
   textStyle : {
       fontSize : 45
   },
   subheading :{
      fontSize  : 20
   }
});

export default ComponentsScreen;