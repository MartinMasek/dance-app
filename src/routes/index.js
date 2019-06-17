import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { TRAIN_OVERVIEW, LIBRARY_SCREEN, FOOT_WORK_OVERVIEW, HOME_OVERVIEW, HOME, MOVE_DETAIL } from './constants';
import { Ionicons } from "@expo/vector-icons";
import HomeOverview from '../screens/Home/Overview.js';
import TrainOverview from '../screens/TrainOverview/index';
import UserLibrary from '../screens/UserLibrary/index';
import { colors } from '../design/constants';
import FootWork from '../screens/Home/FootWork/index';
import MoveDetail from '../screens/MoveDetail';

const homeNavigation = createStackNavigator({
    [HOME_OVERVIEW]: HomeOverview,
    [FOOT_WORK_OVERVIEW]: FootWork
},
    {
        defaultNavigationOptions: {
            headerStyle: {
                borderBottomWidth: 0,
                shadowColor: 'transparent',
                elevation: 0,
                shadowOpacity: 0
            }
        }
    })

const TabNavigator = createBottomTabNavigator({
    [HOME]: homeNavigation,
    [LIBRARY_SCREEN]: UserLibrary,
    [TRAIN_OVERVIEW]: TrainOverview
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === HOME) {
                    iconName = `md-home`;
                } else if (routeName === TRAIN_OVERVIEW) {
                    iconName = `ios-body`;
                }
                else if (routeName === LIBRARY_SCREEN) {
                    iconName = `ios-bookmark`;
                }

                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: colors.primary,
            inactiveTintColor: 'gray',
        },
    });

const mainRoutes = {
    "MainGameNavigation": TabNavigator,
    [MOVE_DETAIL]: MoveDetail
}

export default createAppContainer(createStackNavigator(mainRoutes,
    {
        headerMode: 'none'
    }));