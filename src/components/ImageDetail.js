import React from 'React';
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetail = (props) => {
    return (
        <View>
            <Image source = {props.imageSource}/>
            <Text>{props.title}</Text>
            <Text>Image Score - {props.points}</Text>
        </View>
    );
}

export default ImageDetail;