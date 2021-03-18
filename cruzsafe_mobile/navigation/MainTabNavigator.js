import React from 'react';
import {
  StatusBar,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Platform,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerNavigatorItems,
} from 'react-navigation-drawer';

// List of Screen Imports that should be in the Main Stack
// Login related screens should NOT got here
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import FeedbackScreen from '../screens/FeedbackScreen';

import Images from '../assets/images';
import styles from '../components/styles.js';

const CustomDrawerComponent = props => (
  <SafeAreaView
    style={{
      flex: 1,
    }}>
    <View style={styles.drawerImgContainer}>
      {/* Image that appears at the top of the Side Drawer */}
      <Image source={Images.menuLogo} style={{width: 200, height: 200}} />
    </View>
    <ScrollView style={styles.drawerScrollViewBackground}>
      {/* Where all of the screen navigation buttons appear (Inserted under comment below). Should be scrollable if
                enough screens exist
            */}
      <DrawerNavigatorItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const MainTabNavigator = createDrawerNavigator(
  {
    // Place all Screens. They will all appear in the Side Drawer
    Home: {screen: HomeScreen},
    History: {screen: HistoryScreen},
    Links: {screen: LinksScreen},
    Settings: {screen: SettingsScreen},
    AboutUs: {screen: AboutUsScreen},
    Feedback: {screen: FeedbackScreen},
  },
  {
    contentComponent: CustomDrawerComponent,
    contentOptions: {
      activeTintColor: '#2384BC',
      activeBackgroundColor: 'white',
      backgroundColor: '#113F67',
      labelStyle: styles.drawerText,
    },
  },
);

export default MainTabNavigator;
