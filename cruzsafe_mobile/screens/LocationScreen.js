import React, {Component} from 'react';
import {
  View,
  Text,
  Platform,
  AsyncStorage,
  AppState,
  Alert,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  Header,
  Footer,
  Left,
  Right,
  Body,
  Icon,
  Toast,
  Root,
} from 'native-base';
import MapView, {Polygon} from 'react-native-maps';

import styles from '../components/styles.js';
import {textConstants} from '../components/styles.js';

const LATITUDE = 36.9916;
const LONGITUDE = -122.0583;

const mainCampusPolygon = [
  {latitude: 36.9973, longitude: -122.071065},
  {latitude: 37.003264, longitude: -122.067803},
  {latitude: 37.004941, longitude: -122.060606},
  {latitude: 37.002577, longitude: -122.050079},
  {latitude: 36.983451, longitude: -122.046994},
  {latitude: 36.979636, longitude: -122.0475}, //new
  {latitude: 36.976337, longitude: -122.05238},
  {latitude: 36.976062, longitude: -122.057616},
  {latitude: 36.984249, longitude: -122.069675},
  {latitude: 36.9973, longitude: -122.071065}, // last point has to be same as first point
];

const coastalCampusPolygon = [
  {latitude: 36.955097, longitude: -122.066376},
  {latitude: 36.947878, longitude: -122.06629},
  {latitude: 36.948186, longitude: -122.062084},
  {latitude: 36.955217, longitude: -122.062126},
  {latitude: 36.955097, longitude: -122.066376}, // last point has to be same as first point
];

const geofence = [mainCampusPolygon, coastalCampusPolygon];

var lastRegion = null;
var wasInGeofence = true;
var intervalId = null;

class LocationScreen extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
  }

  state = {
    pre_report: null,
    region: null,
    appState: AppState.currentState,
    marginBottom: 1,
    pinColor: 'red',
  };
  async storeItem(key, value) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error.message);
    }
  }

  // Gets unsubmitted report that is stored in AsyncStorage
  // Should allows for ease of transfer between screens
  async getUnsubReport() {
    var pre_report = JSON.parse(await AsyncStorage.getItem('unsub_report'));
    this._isMounted = true;
    this.setState({
      pre_report: pre_report,
    });
    this.sendAlert();
  }

  sendAlert() {
    Alert.alert(
      'Current Location',
      'Are you at the location of the incident?',
      [
        {
          text: 'Yes',
          onPress: () => {
            this.props.navigation.navigate('Report');
          },
        },
        {
          text: 'No',
          onPress: () => {},
        },
      ],
      {cancelable: false},
    );
  }

  // Stores unsubmitted report into AsyncStorage
  // Used to allow easier transfer of data
  async storeUnsubReport(report) {
    try {
      await AsyncStorage.setItem('unsub_report', JSON.stringify(report));
    } catch (error) {
      console.log(error.message);
    }
  }

  checkGeofence(region) {
    if (lastRegion == region) return;
    lastRegion = region;
    var inside = this.inGeofence({
      latitude: region.latitude,
      longitude: region.longitude,
    });
    if (inside != wasInGeofence) {
      wasInGeofence = inside;
      if (inside) {
        this.setState({pinColor: 'red'});
      } else {
        this.setState({pinColor: 'indigo'});
        Toast.show({
          text:
            'You have exited the bounds of campus. Please move the marker back to a campus region.',
          duration: 5000,
        });
      }
    }
  }

  inGeofence(location) {
    // location = { latitude: LATITUDE, longitude: LONGITUDE };
    for (i in geofence) {
      // if (await GeoFencing.containsLocation(location, geofence[i])) {
      if (this.ourContainsLocation(location, geofence[i])) {
        return true;
      }
    }
    return false;
  }

  ourContainsLocation(point, poly) {
    let x = point.longitude;
    let y = point.latitude;
    let inside = false;
    for (var i = 1; i < poly.length; i++) {
      if (
        poly[i].latitude > y != poly[i - 1].latitude > y &&
        x <
          ((poly[i - 1].longitude - poly[i].longitude) *
            (y - poly[i].latitude)) /
            (poly[i - 1].latitude - poly[i].latitude) +
            poly[i].longitude
      ) {
        inside = !inside;
      }
    }
    return inside;
  }

  componentDidMount() {
    this._isMounted = true;
    this.setState({
      pre_report: null,
    });
    this.getUnsubReport();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  async _onMapReady() {
    this.setState({marginBottom: 0});
  }

  render() {
    const {goBack} = this.props.navigation;
    const {pre_report} = this.state;
    return (
      <Root>
        <SafeAreaView style={{flex: 1}}>
          <Container>
            <Header style={styles.header}>
              <Left>
                <Icon
                  name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-arrow-back`}
                  style={styles.icon}
                  onPress={() => {
                    goBack();
                  }}
                />
              </Left>
              <Body>
                <Text style={styles.header_text}>Location</Text>
              </Body>
              <Right />
            </Header>
            <View
              style={{
                flex: 1,
              }}>
              <Icon
                name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-pin`}
                style={{
                  zIndex: 3,
                  position: 'absolute',
                  marginTop: -26,
                  marginLeft: -9,
                  left: '50%',
                  top: '50%',
                  color: this.state.pinColor,
                }}
                size={40}
                color="#f00"
              />
              <MapView
                style={{
                  flex: 1,
                  marginBottom: this.state.marginBottom,
                }}
                onMapReady={() => {
                  this._onMapReady();
                }}
                showsMyLocationButton={true}
                showsUserLocation={true}
                zoomControlEnabled={true}
                initialRegion={{
                  latitude: LATITUDE,
                  longitude: LONGITUDE,
                  latitudeDelta: 0.0461,
                  longitudeDelta: 0.021,
                }}
                onRegionChangeComplete={region => {
                  if (this._isMounted) {
                    // geofencing!
                    this.setState({region: region});
                    this.checkGeofence(region);
                  }
                }}>
                {/*//Code to print out the geofence boundaries. Do not remove.*/}
                <Polygon
                  coordinates={mainCampusPolygon}
                  fillColor="#145d9944"
                  strokeColor="#145d99"
                />
                <Polygon
                  coordinates={coastalCampusPolygon}
                  fillColor="#145d9944"
                  strokeColor="#145d99"
                />
              </MapView>
              <View
                style={{
                  position: 'absolute',
                  backgroundColor: 'transparenb',
                  padding: 0,
                  bottom: '3%',
                  left: '39%',
                }}>
                <TouchableOpacity
                  style={styles.locbtn}
                  onPress={() => {
                    let pre_report = this.state.pre_report;
                    if (
                      this.inGeofence({
                        latitude: this.state.region.latitude,
                        longitude: this.state.region.longitude,
                      })
                    ) {
                      pre_report.incidentLatitude = this.state.region.latitude;
                      pre_report.incidentLongitude = this.state.region.longitude;
                      pre_report.unchangedLocation = false;
                      this._isMounted &&
                        this.setState({
                          pre_report: pre_report,
                        });
                      this.props.navigation.navigate('Report');
                    } else {
                      Alert.alert(
                        'Off Campus',
                        'Please select a region on the UCSC main campus or coastal sciences.',
                        [
                          {
                            text: 'OK',
                            onPress: () => {},
                          },
                        ],
                        {cancelable: false},
                      );
                    }
                  }}>
                  <Text style={styles.markLocation}>Confirm</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Footer style={styles.footer}>
              <Left
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
              <Body
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={styles.footer_text}>
                  {textConstants.footerText}
                </Text>
              </Body>
              <Right
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            </Footer>
          </Container>
        </SafeAreaView>
      </Root>
    );
  }
}

export default LocationScreen;
