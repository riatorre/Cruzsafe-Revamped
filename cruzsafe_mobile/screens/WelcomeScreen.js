import React from 'react';
import {Text, Image, AsyncStorage, TouchableOpacity} from 'react-native';

import {Content} from 'native-base';

import ScreenCore from '../components/ScreenCore';

import styles from '../components/styles.js';
import Images from '../assets/images';

var tutorialParams = {
  tips: true,
  reportOnboarding: true,
  thumbnailOnboarding: true,
  historyOnboarding: true,
  sidebarOnboarding: true,
  inHistoryOnboarding: false,
};

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  //gets tutorialParams from database
  async getTutorialParamsDB(ID) {
    console.log('getting tutorial params from database: ');
    await fetch('https://cruzsafe.appspot.com/api/users/getTutorialParams', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mobileID: ID,
      }),
    })
      .then(res => res.json())
      .then(result => {
        tp = result[0].tutorialParams;
        if (tp != null) then: tutorialParams = JSON.parse(tp);
      })
      .catch(err => {
        console.log('Error detected!');
        console.log(err);
      });
  }

  // Function used to 'sign' user in. Stores name into AsyncStorage
  _signInAsync = async ID => {
    await this.setID(ID)
      //.then(this.getTutorialParamsDB(ID))
      .then(
        AsyncStorage.setItem('tutorialParams', JSON.stringify(tutorialParams)),
      )
      .then(this.props.navigation.navigate('App'));
  };

  _handleAuth = async () => {
    await this._signInAsync(1);
  };

  async setID(id) {
    try {
      await AsyncStorage.setItem('mobileID', id);
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    return (
      <ScreenCore pageName="Welcome">
        <Content contentContainerStyle={styles.container}>
          <Image source={Images.welcomeLogo} style={styles.welcomeScreenLogo} />
          <TouchableOpacity style={styles.signinBtn} onPress={this._handleAuth}>
            <Text style={{color: 'white', fontSize: 20}}>Sign In</Text>
          </TouchableOpacity>
        </Content>
      </ScreenCore>
    );
  }
}
