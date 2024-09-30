import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function MovieDetail({ navigation }) {
  function goToMovie() {
    navigation.goBack();
  }
  return (
    <View>
      <Text>MovieDetail</Text>
      <Button title="Filmes" onPress={goToMovie} />
    </View>
  );
}

const styles = StyleSheet.create({});
