import React from 'react';
import {createAppContainer} from 'react-navigation';

import AuthFlowController from './navigation/AuthFlowController';

const AppContainer = createAppContainer(AuthFlowController);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
