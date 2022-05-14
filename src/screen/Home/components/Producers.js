import React, { useEffect, useState } from "react";
import { Text } from 'react-native'
import { LoadProducers } from "../../../services/LoadingData";

export default function Producers() {

    const DEBUG = false
    const [producersInfo, setProducerInfo] = useState([])
    useEffect(() => {
        // Chamando a função para popular o estado:
        setProducerInfo(LoadProducers())

        // testing if info is coming
        if(DEBUG) console.log("INFO PRODUTORES", producersInfo)
    },[])

    return (
        <>
            {/* mapping the producers */}
            <Text>Prod</Text>
        </>
    )
}