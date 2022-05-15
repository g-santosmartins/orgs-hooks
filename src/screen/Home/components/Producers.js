import React, { useEffect, useState } from "react";
import { Text, FlatList, StyleSheet } from 'react-native'
import { useProducers } from "../../../hooks/useProducers";
import { LoadProducers } from "../../../services/LoadingData";
import Producer from "./Producer";

export default function Producers({ header: Header }) {

    // Custom hook react
    const [title, list] =  useProducers()

    const ListHeader = () => {
        return (<>
            <Header/>
            <Text style={styles.title}>{title}</Text>
        </>
        )
    }

    // list
    return (
        <FlatList
        style={styles.flatlist}
            data={list}
            // destructuring the item into {name, distance, stars}
            renderItem={({ item }) => <Producer {...item}/>}
            // keys on map:
            keyExtractor={({ id }) => id}
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