import React from "react";
import { Text, View, Image, StyleSheet } from 'react-native'


import logo from '../../../assets/logo.png'


export default function Header() {
    return <View style={styles.headerComponent}>
        <Image
            style={styles.logo}
            source={logo}
        />
        <Text  style={styles.textHeader}>Olá Guilherme,</Text>
        <Text style={styles.subtitle}>Encontre os melhores produtores </Text>
    </View>
}

const styles = StyleSheet.create({

    headerComponent: {
        backgroundColor: '#F6F6F6',
        padding: 16,
    },
    logo: {
        width: 70,
        height: 28,
    },

    textHeader: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold'
    },

    subtitle: {
        fontSize: 16,
        lineHeight: 26
    }
})