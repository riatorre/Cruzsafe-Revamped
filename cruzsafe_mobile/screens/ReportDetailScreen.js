import React from 'react';
import {Button} from 'react-native';
import {StackActions} from 'react-navigation';

export default class ReportDetailScreen extends React.Component {
  render() {
    const {dispatch} = this.props.navigation;
    const {popToTop} = StackActions;
    return <Button title="Go Back" onPress={() => dispatch(popToTop())} />;
  }
}
