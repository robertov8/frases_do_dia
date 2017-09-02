/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, Text, Button } from 'react-native';

export default class frases_do_dia extends Component {

    botaoPressionado() {
        alert('Botao pressionado!');
    }

    render() {
        return (
            <View style={styles.principal}>
                <Button
                    title='Clique aqui'
                    color="#841584"
                    onPress={this.botaoPressionado}
                    accessibilityLabel="Clique para abrir as notícias!!!"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    principal: {
        flex: 1,
    }
});

AppRegistry.registerComponent('frases_do_dia', () => frases_do_dia);
