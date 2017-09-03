/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

export default class frases_do_dia extends Component {

    botaoPressionado() {
    }

    render() {
        return (
            <View style={styles.principal}>
                <Image source={ require('./imgs/logo.png')}/>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textoBotao}>Nova frase</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    principal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botao: {
        backgroundColor: '#538530',
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginTop: 20
    },
    textoBotao: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

AppRegistry.registerComponent('frases_do_dia', () => frases_do_dia);
