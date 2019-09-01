import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ListScreen = () =>{
    return <Text style = {styles.listFont}>ListScreen</Text>;
};

const styles = StyleSheet.create({
      listFont : {
          fontSize : 20
      }
});

export default ListScreen;