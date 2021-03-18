import React from 'react';
import {Button} from 'react-native';

export default class MediaScreen extends React.Component {
  render() {
    const {goBack} = this.props.navigation;
    return <Button title="Go Back" onPress={() => goBack()} />;
  }
}
