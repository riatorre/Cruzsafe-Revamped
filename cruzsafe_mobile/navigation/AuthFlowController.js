import {createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Main App
import MainTabNavigator from './MainTabNavigator';
// Screen for Authentication
import WelcomeScreen from '../screens/WelcomeScreen';
import ReportDetailScreen from '../screens/ReportDetailScreen';
import ReportScreen from '../screens/ReportScreen';
import LocationScreen from '../screens/LocationScreen';
import CameraScreen from '../screens/CameraScreen';
import MediaScreen from '../screens/MediaScreen';

// Screen for determining if (Re-)Authentication is needed
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

const AppStack = createStackNavigator(
  {
    Main: {screen: MainTabNavigator},
    Report: {screen: ReportScreen},
    Location: {screen: LocationScreen},
    Camera: {screen: CameraScreen},
    ReportDetail: {screen: ReportDetailScreen},
    Media: {screen: MediaScreen},
  },
  {headerMode: 'none'},
);

const AuthStack = createStackNavigator(
  {Welcome: {screen: WelcomeScreen}},
  {headerMode: 'none'},
);

const AuthFlowController = createSwitchNavigator(
  {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    AuthLoading: {screen: AuthLoadingScreen},
    App: {screen: AppStack},
    Auth: {screen: AuthStack},
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default AuthFlowController;
