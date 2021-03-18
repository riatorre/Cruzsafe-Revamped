/*
 * ScreenCore.js
 * Core common component for almost all screens
 * Takes in a String pageName, boolean backNav, boolean topNav, and boolean drawerNav as props
 * Comprises of a header and a footer
 * Header prints out the pageName in the center, and has an icon for either backNav or drawerNav
 * topNav enables page to go back to top of navigation stack
 * Footer is consistent
 */

import React from 'react';
import {Text, SafeAreaView, Platform} from 'react-native';
import {Container, Header, Footer, Left, Right, Body, Icon} from 'native-base';

import styles, {textConstants} from '../components/styles';

const fixLeft = {
  flex: 1,
  alignItems: 'flex-start',
  justifyContent: 'center',
};
const fixCent = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};
const fixRight = {
  flex: 1,
  alignItems: 'flex-end',
  justifyContent: 'center',
};

export default class ScreenCore extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      pageName = '',
      backNav = false,
      drawerNav = false,
      navAction,
      children,
    } = this.props;
    const iconName = drawerNav ? '-menu' : '-arrow-back';
    return (
      <SafeAreaView style={{flex: 1}}>
        <Container>
          <Header style={styles.header}>
            <Left style={fixLeft}>
              {drawerNav || backNav ? (
                <Icon
                  name={`${Platform.OS === 'ios' ? 'ios' : 'md'}${iconName}`}
                  style={styles.icon}
                  onPress={() => {
                    navAction ? navAction() : null;
                  }}
                />
              ) : null}
            </Left>
            <Body style={fixCent}>
              {/* Center of Header */}
              <Text style={styles.header_text}>{pageName}</Text>
            </Body>
            <Right style={fixRight} />
          </Header>
          {children}
          <Footer style={styles.footer}>
            <Left style={fixLeft} />
            <Body style={fixCent}>
              {/* Center of Footer */}
              <Text style={styles.footer_text}>{textConstants.footerText}</Text>
            </Body>
            <Right style={fixRight} />
          </Footer>
        </Container>
      </SafeAreaView>
    );
  }
}
