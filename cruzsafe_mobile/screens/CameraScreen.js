import React from 'react';
import {Button} from 'react-native';

export default class CameraScreen extends React.Component {
  render() {
    const {goBack} = this.props.navigation;
    return <Button title="Go Back" onPress={() => goBack()} />;
  }
}
