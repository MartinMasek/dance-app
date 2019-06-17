import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { colors, STANDARD_SIDE_MARGIN } from '../../../design/constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MOVE_DETAIL } from '../../../routes/constants';

export default class FootWork extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (
                <TouchableOpacity onPress={navigation.goBack}>
                    <Ionicons name="md-arrow-back" style={{ marginLeft: STANDARD_SIDE_MARGIN }} size={25} color={colors.primary} />
                </TouchableOpacity>
            )
        };
    };

    render() {
        return (
            <View>
                <Text>FootWork</Text>
                <Text onPress={() => this.props.navigation.navigate(MOVE_DETAIL, { id: "12" })}>Click to see the detail</Text>
            </View>
        );
    }
}