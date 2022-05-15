import React from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';

// internal imports
import star from '../assets/estrela.png'
import grayStar from '../assets/estrelaCinza.png'

export function Star({
    onPress,
    maximazed = false,
    disabled = false,
    filled,
}) {


    const getImage = () => {
        // Decides the image
        if (filled) {
            return star
        }
        return grayStar
    }

    const styles = stylesFunction(maximazed)
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
        >
            <Image style={styles.star} source={getImage()} />

        </TouchableOpacity>
    );
}


const stylesFunction = (maximized) => StyleSheet.create({
    star: {
        width: maximized ? 30 : 12,
        height: maximized ? 30 : 12,
        marginRight: 2,
    },
})