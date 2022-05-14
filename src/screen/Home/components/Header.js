import React, { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet } from 'react-native'


import logo from '../../../assets/logo.png'
import { LoadHeader } from "../../../services/LoadingData";

export default function Header() {
    const [headerInfo, setHeaderInfo] = useState({})

    useEffect(() => {
        // Chamando a função para popular o estado:
        setHeaderInfo(LoadHeader())
    }, [])
    return <View style={styles.headerComponent}>
        <Image
            style={styles.logo}
            source={logo}
        />
        <Text style={styles.textHeader}>{headerInfo.welcomeTitle}</Text>
        <Text style={styles.subtitle}>{headerInfo.subtitle} </Text>
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
        fontWeight: 'bold',
        color: "#464646",
    },

    subtitle: {
        fontSize: 16,
        lineHeight: 26,
        color: "#A3A3A3",

    }
})