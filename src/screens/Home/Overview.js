import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-navigation'
import { STANDARD_SIDE_MARGIN } from '../../design/constants';
import TabView from '../shared/TabView';
import { connect } from 'react-redux';
import { FOOT_WORK_OVERVIEW } from '../../routes/constants';

export class Overview extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: null,
            title: "DD"
        }
    };

    render() {
        return (
            <TabView>
                <Text>HOME</Text>
                <TouchableHighlight onPress={this.props.navigateToFootwork}>
                    <View style={{ marginTop: 0, height: 60, width: 60 }}>
                        <Text>DETAIL</Text>
                    </View>
                </TouchableHighlight>
            </TabView>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        navigateToFootwork: () => ownProps.navigation.navigate(FOOT_WORK_OVERVIEW)
    }
}

export default connect(mapStateToProps)(Overview)