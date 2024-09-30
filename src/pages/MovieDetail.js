import { StyleSheet, Text, View, Button, Image } from "react-native";
import React from "react";

export default function MovieDetail({ navigation, route }) {
  const { movieSelected } = route.params;

  return (
    <View>
      <Image height={140} width={100} source={{ uri: movieSelected.poster }} />
      <Text>{movieSelected.title}</Text>
      <Text>{movieSelected.year}</Text>
      <Text>{movieSelected.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
