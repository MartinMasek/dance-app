import React from 'react';
import { View, SafeAreaView, Text, Dimensions } from 'react-native';

const VIDEO_WIDTH = Dimensions.get('window').width;
const VIDEO_HEIGHT = VIDEO_WIDTH * 1.5;

export default class MoveDetail extends React.Component {

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ width: VIDEO_WIDTH, height: VIDEO_HEIGHT, backgroundColor: 'red' }}></View>
                <Text>MoveDetail</Text>
            </SafeAreaView>
        );
    }
}