import React, { useEffect, useState } from "react";
import { Text, FlatList, StyleSheet } from 'react-native'
import { LoadProducers } from "../../../services/LoadingData";

export default function Producers({ header: Header }) {

    const DEBUG = false
    const [producersTitle, setProducerTitle] = useState()
    const [producersList, setProducerList] = useState([])
    useEffect(() => {
        // Chamando a função para popular o estado:
        const { list, title } = LoadProducers()
        setProducerTitle(title)
        setProducerList(list)

        // testing if info is coming
        if (DEBUG) console.log("INFO PRODUTORES", producersInfo)
    }, [])

    const ListHeader = () => {
        return (<>
            <Header/>
            <Text style={styles.title}>{producersTitle}</Text>
        </>
        )
    }



    // list
    return (
        <FlatList
        style={styles.flatlist}
            data={producersList}
            renderItem={({ item: { name } }) => <Text>{name}</Text>}
            // keys on map:
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={ListHeader}
        />
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646',
    },
    flatlist: {
        backgroundColor: '#fff'
    }
})