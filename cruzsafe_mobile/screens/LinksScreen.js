import React from 'react';
import {
  Linking,
  View,
  ScrollView,
  Image,
  Text,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'native-base';

import ScreenCore from '../components/ScreenCore';
import Images from '../assets/images';
import styles from '../components/styles.js';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'External Links',
    drawerIcon: ({}) => (
      <Icon
        name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-link`}
        style={styles.drawerText}
      />
    ),
  };
  render() {
    const {externalLinksImgs} = Images;
    return (
      <ScreenCore
        pageName="External Links"
        drawerNav={true}
        navAction={() => this.props.navigation.openDrawer()}>
        {/* Main Body */}
        <ScrollView contentContainerStyle={styles.linksContainer}>
          <View style={styles.linkTextContainer}>
            <Text style={styles.linkDescriptionText}>
              Community engagement and safety services at your fingertips,
              available to everyone! Stay safe out there!
              {'\n'} {'\n'}-The CruzSafe Team
            </Text>
          </View>
          {/* Individual Link*/}
          <View style={styles.linkRow}>
            <TouchableOpacity
              style={styles.linkContainer}
              onPress={() => {
                Linking.openURL(
                  'https://tapride-saferide-ucsc.herokuapp.com/ride/#/',
                );
              }}>
              <Image
                source={externalLinksImgs.nightSafetyEscort}
                style={styles.linkPicture}
              />
              <View style={styles.linkbtn}>
                <Text style={styles.linkText}>Night Safety Escort</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.linkContainer}
              onPress={() => {
                Linking.openURL('https://riskandsafety.ucsc.edu/');
              }}>
              <Image
                source={externalLinksImgs.riskAndSafetyServices}
                style={styles.linkPicture}
              />
              <View style={styles.linkbtn}>
                <Text style={styles.linkText}>Risk and Safety Services</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* Individual Link*/}
          <View style={styles.linkRow}>
            <TouchableOpacity
              style={styles.linkContainer}
              onPress={() => {
                Linking.openURL('https://pbsbo.ucsc.edu/facilities/index.html');
              }}>
              <Image
                source={externalLinksImgs.PBSCI}
                style={styles.linkPicture}
              />
              <View style={styles.linkbtn}>
                <Text style={styles.linkText}>PBSci Facilities</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.linkContainer}
              onPress={() => {
                Linking.openURL('https://physicalplant.ucsc.edu');
              }}>
              <Image
                source={externalLinksImgs.physicalPlant}
                style={styles.linkPicture}
              />
              <View style={styles.linkbtn}>
                <Text style={styles.linkText}>Physical Plant</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* Individual Link*/}
          <View style={styles.linkRow}>
            <TouchableOpacity
              style={styles.linkContainer}
              onPress={() => {
                Linking.openURL('https://ehs.ucsc.edu');
              }}>
              <Image
                source={externalLinksImgs.envHealthAndSafety}
                style={styles.linkPicture}
              />
              <View style={styles.linkbtn}>
                <Text style={styles.linkText}>
                  Environmental Health and Safety
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.linkContainer}
              onPress={() => {
                Linking.openURL('https://risk.ucsc.edu');
              }}>
              <Image
                source={externalLinksImgs.riskServices}
                style={styles.linkPicture}
              />
              <View style={styles.linkbtn}>
                <Text style={styles.linkText}>Risk Services</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.linkRow}>
            <TouchableOpacity
              style={styles.linkContainer}
              onPress={() => {
                Linking.openURL('https://healthcenter.ucsc.edu');
              }}>
              <Image
                source={externalLinksImgs.healthServices}
                style={styles.linkPicture}
              />
              <View style={styles.linkbtn}>
                <Text style={styles.linkText}>Health Services</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.linkContainer}
              onPress={() => {
                Linking.openURL(
                  'https://police.ucsc.edu/services/cpr-bcon.html',
                );
              }}>
              <Image
                source={externalLinksImgs.CPR}
                style={styles.linkPicture}
              />
              <View style={styles.linkbtn}>
                <Text style={styles.linkText}>CPR and Bleeding Control</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.linkRow}>
            <TouchableOpacity
              style={styles.linkContainer}
              onPress={() => {
                Linking.openURL(
                  'https://police.ucsc.edu/services/lost-and-found.html',
                );
              }}>
              <Image
                source={externalLinksImgs.lostAndFound}
                style={styles.linkPicture}
              />
              <View style={styles.linkbtn}>
                <Text style={styles.linkText}>Lost and Found</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.linkContainer}
              onPress={() => {
                Linking.openURL(
                  'https://police.ucsc.edu/services/dispatch.html',
                );
              }}>
              <Image
                source={externalLinksImgs.publicSafety}
                style={styles.linkPicture}
              />
              <View style={styles.linkbtn}>
                <Text style={styles.linkText}>Public Safety Numbers</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.linkRow}>
            <TouchableOpacity
              style={styles.linkContainer}
              onPress={() => {
                Linking.openURL(
                  'https://police.ucsc.edu/crime-prevention/crime-log-and-map.html',
                );
              }}>
              <Image
                source={externalLinksImgs.crimeMap}
                style={styles.linkPicture}
              />
              <View style={styles.linkbtn}>
                <Text style={styles.linkText}>Interactive Crime Map</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.linkContainer}
              onPress={() => {
                Linking.openURL('https://police.ucsc.edu/report/index.html');
              }}>
              <Image
                source={externalLinksImgs.police}
                style={styles.linkPicture}
              />
              <View style={styles.linkbtn}>
                <Text style={styles.linkText}>Reporting Crimes</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ScreenCore>
    );
  }
}
