import React from 'react';
import { SafeAreaView } from 'react-navigation'
import { STANDARD_SIDE_MARGIN, colors } from '../../design/constants';

export default class TabView extends React.Component {

    render() {
        return (
            <SafeAreaView style={[{
                paddingHorizontal: STANDARD_SIDE_MARGIN,
                flex: 1,
                backgroundColor: colors.primary
            }, this.props.style]}>
                {this.props.children}
            </SafeAreaView>
        );
    }
}