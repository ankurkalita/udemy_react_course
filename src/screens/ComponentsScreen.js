import React from 'react';
import {Text, Stylesheet} from 'react-native';

const ComponentsScreen = () =>{
    return <Text style={styles.textStyle}>Hello from Components Screen</Text>;
};

const styles = Stylesheet.create({
   textStyle : {
       fontsize : 30
   }
});