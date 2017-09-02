/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class frases_do_dia extends Component {

    botaoPressionado() {
        alert('Botao pressionado!');
    }

    render() {
        return (
            <View style={styles.principal}>
                <TouchableOpacity style={styles.botao} onPress={this.botaoPressionado}>
                    <Text style={styles.textoBotao}>Clique aqui</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    principal: {
        flex: 1,
    },
    botao: {
        backgroundColor: '#48BBEC',
        padding: 10,
        borderColor: '#1d8eb8',
        borderWidth: 3,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.4
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});

AppRegistry.registerComponent('frases_do_dia', () => frases_do_dia);
