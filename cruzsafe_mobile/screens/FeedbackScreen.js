import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import {Content, Icon} from 'native-base';

import ScreenCore from '../components/ScreenCore';
import styles from '../components/styles.js';

const maxFeedbackTextLength = 500;

class FeedbackScreen extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
  }

  state = {
    mobileID: null,
    feedbackText: '',
    height: 0, //initializing the content text height
  };

  async getMobileID() {
    try {
      const id = await AsyncStorage.getItem('mobileID');
      return Number(id);
    } catch (error) {
      console.log(error.message);
    }
  }

  handleSubmit = async () => {
    await fetch('https://cruzsafe.appspot.com/api/reports/submitFeedback', {
      // Defines what type of call is being made; above link is a POST request, so POST is needed Below
      method: 'POST',
      // Metadata in regards as to what is expected to be sent/recieved
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      // Pass all data here; make sure all variables are named the same as in the API, and that the data types match
      body: JSON.stringify({
        feedback: this.state.feedbackText,
        mobileID: this.state.mobileID,
      }),
    })
      // Successful Call to API
      .then(response => response.json()) // Parse response into JSON
      .then(responseJSON => {
        if (responseJSON.message == null) {
          Alert.alert(
            'Feedback Submitted',
            'Thank you for your feedback! We will try our best to take it into account in the near future. We appreciate your help and support.',
            [
              {
                text: 'OK',
                onPress: () => {
                  this._isMounted && this.setState({feedbackText: ''});
                  this.props.navigation.goBack();
                },
              },
            ],
            {cancelable: false},
          );
        } else {
          Alert.alert(
            'Error',
            'An Error has Occurred; failed to submit your feedback. Please try again later.',
          );
        }
      })
      .catch(err => {
        Alert.alert(
          'Error',
          'An Error has Occurred; failed to submit your feedback. Please try again later.',
        );
      });
  };

  static navigationOptions = {
    labelStyle: styles.drawerText,
    drawerLabel: 'Feedback',
    drawerIcon: ({}) => (
      <Icon
        name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-star`}
        style={styles.drawerText}
      />
    ),
  };

  async componentDidMount() {
    this._isMounted = true;
    mobileID = await this.getMobileID();
    this._isMounted && this.setState({mobileID});
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <ScreenCore
        pageName="Feedback"
        drawerNav={true}
        navAction={() => this.props.navigation.openDrawer()}>
        <Content contentContainerStyle={styles.container}>
          <View style={styles.feedbackContainer}>
            <Text
              style={{
                alignSelf: 'center',
                marginVertical: 20,
                fontSize: 24,
              }}>
              Submit your feedback.
            </Text>
            <Text style={styles.fieldHeaderBackground}>Feedback</Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                autoCapitalize="sentences"
                placeholder="Your Feedback"
                multiline={true}
                maxLength={maxFeedbackTextLength}
                onChangeText={feedbackText => {
                  this._isMounted &&
                    this.setState({
                      feedbackText,
                    });
                }}
                onContentSizeChange={event =>
                  this._isMounted &&
                  this.setState({
                    height: event.nativeEvent.contentSize.height,
                  })
                }
                style={[
                  styles.textInputFeedback,
                  {
                    height: Math.min(120, Math.max(35, this.state.height)),
                  },
                ]}
                value={this.state.feedbackText}
              />
            </View>
            <Text style={styles.fieldFooterBackground}>
              Characters Left:{' '}
              {maxFeedbackTextLength - this.state.feedbackText.length}/
              {maxFeedbackTextLength}
            </Text>
            <TouchableOpacity
              style={styles.feedbackSubmit}
              onPress={() => {
                if (this.state.feedbackText != '') {
                  this.handleSubmit();
                } else {
                  Alert.alert(
                    'No Feedback',
                    'Please enter your feedback before you try to submit.',
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
              <Icon
                name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-send`}
                style={styles.btnTextWhite}
              />
              <Text style={styles.btnTextWhite}>Submit</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </ScreenCore>
    );
  }
}

export default FeedbackScreen;
