import React from 'react';
import { View, SafeAreaView, Text, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import { resolveVideoUri } from '../../services/api/VideoUrlResolver';

const VIDEO_WIDTH = Dimensions.get('window').width;
const VIDEO_HEIGHT = VIDEO_WIDTH * 1.5;

export default class MoveDetail extends React.Component {

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ width: VIDEO_WIDTH, height: VIDEO_HEIGHT, backgroundColor: 'red' }}>
                    <Video
                        // source={require('../../data/videos/master_lvl_footwork_man.mp4')}
                        source={resolveVideoUri(0)}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="cover"
                        shouldPlay
                        isLooping
                        useNativeControls={true}
                        style={{ width: VIDEO_WIDTH, height: VIDEO_HEIGHT }}
                    />
                </View>
            </SafeAreaView>
        );
    }
}