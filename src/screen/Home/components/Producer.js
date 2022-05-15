import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Producer({ name, image, distance, stars }) {
  return (
    <View style={styles.card}>
      <Image
        style={styles.cardImage}
        source={image}
        accessibilityLabel={name} // screen readers support
      />
      <View style={styles.cardInfo} >
        <Text style={styles.cardName}>{name}</Text>
        <Text style={styles.cardDistance}>{distance}</Text>
        {/* <Text>{stars}</Text> */}
      </View>
    </View>
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