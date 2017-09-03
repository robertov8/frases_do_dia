/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, Text, Image } from 'react-native';

export default class frases_do_dia extends Component {

    botaoPressionado() {
        alert('Botao pressionado!');
    }

    render() {
        return (
            <View style={styles.principal}>
                <Image style={styles.imagem} source={ require('./imgs/uvas.png')}>
                    <Text style={styles.texto}>Legenda para a foto</Text>
                </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    principal: {
        paddingTop: 40
    },
    imagem: {
        justifyContent: 'flex-end',
        padding: 5
    },
    texto: {
        backgroundColor: 'white',
        textAlign: 'center'
    }
});

AppRegistry.registerComponent('frases_do_dia', () => frases_do_dia);
