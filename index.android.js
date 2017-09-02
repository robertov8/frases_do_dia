/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

export default class frases_do_dia extends Component {
  render() {
    return (
        <Text style={styles.estiloTexto}>Frases do dia</Text>
    );
  }
}

const styles = {
    estiloTexto: {
        fontSize: 30,
        backgroundColor: '#08509B',
        height: 80
    }
};

AppRegistry.registerComponent('frases_do_dia', () => frases_do_dia);
