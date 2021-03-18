import React from 'react';
import {Text, Image, View, Platform, ScrollView} from 'react-native';
import {Icon} from 'native-base';

import ScreenCore from '../components/ScreenCore';
import styles from '../components/styles';
import Images from '../assets/images';

export default class AboutUsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'About Us',
    drawerIcon: ({}) => (
      <Icon
        name={`${
          Platform.OS === 'ios' ? 'ios' : 'md'
        }-information-circle-outline`}
        style={styles.drawerText}
      />
    ),
  };
  render() {
    const {authorsImgs} = Images;
    return (
      <ScreenCore
        pageName="About Us"
        drawerNav={true}
        navAction={() => this.props.navigation.openDrawer()}>
        {/* Main Body */}
        <ScrollView contentContainerStyle={styles.linksContainer}>
          {/* Individual Person: Left Picture*/}
          <View style={styles.AboutUSRow}>
            <View style={styles.aboutUsPictureContainer}>
              <Image
                source={authorsImgs.Richard}
                style={styles.aboutUsPicture}
              />
            </View>
            <View style={styles.aboutUsTextContainer}>
              <Text style={styles.aboutUsBoldText}>Richard Torres</Text>
              <Text style={styles.aboutUsText}>
                UCSC Computer Science Undergraduate Student
                {'\n'}
                {'\n'}Really, really hates Shibboleth. Like, he absolutely
                loathes it.
              </Text>
            </View>
          </View>
          {/* Individual Person: Right Picture*/}
          <View style={styles.AboutUSRow}>
            <View style={styles.aboutUsTextContainer}>
              <Text style={styles.aboutUsBoldText}>Kalinda Fraser</Text>
              <Text style={styles.aboutUsText}>
                UCSC Computer Science Undergraduate Student
                {'\n'}
                {'\n'}Has something of an affinity for dropdown menus.
              </Text>
            </View>
            <View style={styles.aboutUsPictureContainer}>
              <Image source={authorsImgs.Kali} style={styles.aboutUsPicture} />
            </View>
          </View>
          {/* Individual Person: Left Picture*/}
          <View style={styles.AboutUSRow}>
            <View style={styles.aboutUsPictureContainer}>
              <Image source={authorsImgs.Jo} style={styles.aboutUsPicture} />
            </View>
            <View style={styles.aboutUsTextContainer}>
              <Text style={styles.aboutUsBoldText}>Zhiyue Li</Text>
              <Text style={styles.aboutUsText}>
                UCSC Computer Science Undergraduate Student
                {'\n'}
                {'\n'}What the heck are you still doing up?! Go to bed!
              </Text>
            </View>
          </View>
          {/* Individual Person: Right Picture*/}
          <View style={styles.AboutUSRow}>
            <View style={styles.aboutUsTextContainer}>
              <Text style={styles.aboutUsBoldText}>Youmna Shafiq</Text>
              <Text style={styles.aboutUsText}>
                UCSC Computer Science Undergraduate Student
                {'\n'}
                {'\n'}Oh no. Are those stairs?
              </Text>
            </View>
            <View style={styles.aboutUsPictureContainer}>
              <Image source={authorsImgs.Umna} style={styles.aboutUsPicture} />
            </View>
          </View>
          {/* Individual Person: Left Picture*/}
          <View style={styles.AboutUSRow}>
            <View style={styles.aboutUsPictureContainer}>
              <Image
                source={authorsImgs.Arthur}
                style={styles.aboutUsPicture}
              />
            </View>
            <View style={styles.aboutUsTextContainer}>
              <Text style={styles.aboutUsBoldText}>Arthurlot Li</Text>
              <Text style={styles.aboutUsText}>
                UCSC Computer Science Undergraduate Student
                {'\n'}
                {'\n'}Look how they massacred my boy.
              </Text>
            </View>
          </View>
        </ScrollView>
      </ScreenCore>
    );
  }
}
