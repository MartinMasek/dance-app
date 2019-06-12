import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { HOME_SCREEN, TRAIN_OVERVIEW, LIBRARY_SCREEN } from './constants';
import Home from '../screens/Home';
import TrainOverview from '../screens/TrainOverview/index';
import UserLibrary from '../screens/UserLibrary/index';

const TabNavigator = createBottomTabNavigator({
    [HOME_SCREEN]: Home,
    [TRAIN_OVERVIEW]: TrainOverview,
    [LIBRARY_SCREEN]: UserLibrary
});

const mainRoutes = {
    "MainGameNavigation": TabNavigator
}

export default createAppContainer(createStackNavigator(mainRoutes))