/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, Text } from 'react-native';

export default class frases_do_dia extends Component {
  render() {
    return (
        <View style={styles.principal}>
            <Text style={styles.topo}>Topo</Text>
            <Text style={styles.conteudo}>Conteudo</Text>
            <Text style={styles.rodape}>Rodape</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    principal: {
        flex: 1,
        backgroundColor: 'cornflowerblue'
    },
    topo: {
        flex: 2,
        backgroundColor: 'brown'
    },
    conteudo: {
        flex: 8,
        backgroundColor: 'yellowgreen'
    },
    rodape: {
        flex: 1,
        backgroundColor: 'orangered'
    }
});

AppRegistry.registerComponent('frases_do_dia', () => frases_do_dia);
