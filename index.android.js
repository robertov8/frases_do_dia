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
            <Text style={styles.estiloTexto}>A</Text>
            <Text style={styles.estiloTexto2}>B</Text>
            <Text style={styles.estiloTexto}>C</Text>
        </View>
    );
  }
}

const styles = {
    estiloTexto: {
        fontSize: 30,
        backgroundColor: '#08509B',
        height: 60,
        width: 60
    },
    estiloTexto2: {
        fontSize: 30,
        backgroundColor: '#2A48FA',
        height: 60,
        width: 60
    },
    estiloView: {
        backgroundColor: 'skyblue',
        height: 300,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column'
    }
};

AppRegistry.registerComponent('frases_do_dia', () => frases_do_dia);
