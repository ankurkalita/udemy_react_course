import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

const ListScreen = () =>{
    const friends = [
        { 'name': 'friend #1', 'age': '20'},
        { 'name': 'friend #2', 'age': '30'},
        { 'name': 'friend #3', 'age': '40'},
        { 'name': 'friend #4', 'age': '50'},
        { 'name': 'friend #5', 'age': '60'},
        { 'name': 'friend #6', 'age': '70'},
        { 'name': 'friend #7', 'age': '80'},
        { 'name': 'friend #8', 'age': '90'}
    ];

    return (
    <FlatList 
       data = {friends}
       keyExtractor = {(friend) => friend.name }
       renderItem = { ( {item} ) => {
          return <Text>{item.name} - age {item.age}</Text>;
       }}
    />);
};

const styles = StyleSheet.create({
      listFont : {
          fontSize : 20
      }
});

export default ListScreen;