import React from 'react';
import { View, Text } from 'react-native';

export default class Home extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Home"
        }
    };

    render() {
        return (
            <View>
                <Text>Home</Text>
            </View>
        );
    }
}