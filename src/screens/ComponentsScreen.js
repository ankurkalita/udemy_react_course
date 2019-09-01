import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const greetings = <Text>Bye There!!</Text>;
const ComponentsScreen = () =>{
    return (
        <View>
        <Text style={styles.textStyle}>Hello from Components Screen</Text>
        {greetings}
        </View>
        );
};

const styles = StyleSheet.create({
   textStyle : {
       fontSize : 30
   }
});

export default ComponentsScreen;