import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Producer({ name, image, distance, stars }) {
  return (
    <View>
      <Image
        source={image}
        accessibilityLabel={name} // screen readers support
      />
      <View>
        <Text>{name}</Text>
        <Text>{distance}</Text>
        <Text>{stars}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create