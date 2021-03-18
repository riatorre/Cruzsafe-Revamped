import React from 'react';
import {Button, View} from 'react-native';
import {StackActions} from 'react-navigation';

export default class ReportScreen extends React.Component {
  render() {
    const {navigate, dispatch} = this.props.navigation;
    const {popToTop} = StackActions;
    return (
      <View>
        <Button title="Go Back" onPress={() => dispatch(popToTop())} />
        <Button title="Go to Camera" onPress={() => navigate('Camera')} />
        <Button title="Go to Media" onPress={() => navigate('Media')} />
        <Button
          title="Go to Report Detail"
          onPress={() => navigate('ReportDetail')}
        />
      </View>
    );
  }
}
