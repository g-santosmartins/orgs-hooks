import React, { useState } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import { Star } from './Star';

export default function Stars({
    quantity: oldQuantity,
    editable = false,
    maximized = false,

}) {

    const [starsquantity, setStarsQuantity] = useState(oldQuantity)

    //Rendering stars component
    const StarsRenderComponent = () => {
        const starsList = []
        for (let iterator = 0; iterator < 5; iterator++) {
            starsList.push(
                <Star
                    key={iterator}
                    onPress={() => { setStarsQuantity(iterator + 1) }}
                    disabled={!editable}
                    filled={iterator < starsquantity}
                    maximazed={maximized}
                />
            )
        }
        // return the list of images to be rendered
        return starsList
    }

    // Calling the conditional styles and passing params
    return (
        <View style={styles.starsContainer}>
            <StarsRenderComponent />
        </View>
    );
}

const styles = StyleSheet.create({
    starsContainer: {
        flexDirection: 'row',
    }
})