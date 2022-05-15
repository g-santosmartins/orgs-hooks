import React, {useState, useReducer} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Stars from '../../../components/Stars';

export default function Producer({ name, image, distance, stars }) {

  // new hook type call
  const [maximized, selectedInversion] = useReducer(
    (maximized) => !maximized, 
    false
  )

  return (
    <TouchableOpacity
    onPress={selectedInversion} 
    style={styles.card}
    >
      <Image
        style={styles.cardImage}
        source={image}
        accessibilityLabel={name} // screen readers support
      />
      <View style={styles.cardInfo} >

        <View>
          <Text style={styles.cardName}>{name}</Text>
          <Stars 
          quantity={stars} 
          maximized={maximized} 
          editable={maximized}/>
        </View>

        <Text style={styles.cardDistance}>{distance}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',

    //Android - Card shadow resolves
    elevation: 3,

    //IOS - Card shadow resolves
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

  },

  cardImage: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 22,
    marginLeft: 16,
    marginRight: 16,
  },

  cardInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },

  cardName: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold'
  },

  cardDistance: {
    fontSize: 12,
    lineHeight: 19,
  }
})