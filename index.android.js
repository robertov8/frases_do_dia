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
    TouchableOpacity,
    Alert
} from 'react-native';

export default class frases_do_dia extends Component {

    botaoPressionado() {
        let numberoAleatorio = Math.floor(Math.random() * 5);

        let frases = [
            'Estou sempre alegre. Essa é a melhor maneira de resolver os problemas da vida.',
            'O tempo dura bastante para aqueles que sabem aproveitá-lo.',
            'Se você encontrar um caminho sem obstáculos, ele provavelmente não leva a lugar nenhum.',
            'Não existe um caminho para a felicidade. A felicidade é o caminho.',
            'Você nunca sabe a força que tem, até que a sua única alternativa é ser forte.'
        ];

        let fraseEscolhida = frases[ numberoAleatorio ];
        Alert.alert('Frase do dia', fraseEscolhida);
    }

    render() {
        return (
            <View style={styles.principal}>
                <Image source={ require('./imgs/logo.png')}/>
                <TouchableOpacity
                    onPress={this.botaoPressionado}
                    style={styles.botao}>
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
