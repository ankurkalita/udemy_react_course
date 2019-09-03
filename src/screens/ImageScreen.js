import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title = 'Beach' imageSource = {require('../../assets/beach.jpg')} points = '9'/>
            <ImageDetail title = 'Forest' imageSource = {require('../../assets/forest.jpg')} points = '7'/>
            <ImageDetail title = 'Mountain' imageSource = {require('../../assets/mountain.jpg')} points = '4'/>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default ImageScreen;