import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements';

export default function Favorites({navigation}) {
  return (
    <View>
      <Text>Welcome to the</Text>
      <Text>Favorites</Text>
      <Button
      title="Go somewhere"
      onPress={() => {
        // Navigate using the `navigation` prop that you received
        navigation.navigate("home");
      }}
    />

    </View>
  )
}

const styles = StyleSheet.create({})