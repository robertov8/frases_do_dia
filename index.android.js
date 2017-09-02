/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';

export default class frases_do_dia extends Component {
  render() {
    return (
        <View style={styles.estiloView}>
            <Text style={styles.estiloTexto}>Frases do dia</Text>
        </View>
    );
  }
}

const styles = {
    estiloTexto: {
        fontSize: 30,
        backgroundColor: '#08509B',
    },
    estiloView: {
        backgroundColor: 'skyblue',
        height: 300,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

AppRegistry.registerComponent('frases_do_dia', () => frases_do_dia);
