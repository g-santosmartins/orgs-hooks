import React, { useEffect, useState } from 'react';
import { LoadProducers } from '../services/LoadingData';

export function useProducers() {
    // hook debug const
    const DEBUG = false

    const [producersTitle, setProducerTitle] = useState()
    const [producersList, setProducerList] = useState([])

    useEffect(() => {
        // Chamando a função para popular o estado:
        const { list, title } = LoadProducers()
        setProducerTitle(title)
        setProducerList(list)

        // testing and debugging info:
        if (DEBUG) console.log("TITLE PRODUCERS", title)
        if (DEBUG) console.log("LIST PRODUCERS", list)
    }, [])
    return [producersTitle, producersList]
}