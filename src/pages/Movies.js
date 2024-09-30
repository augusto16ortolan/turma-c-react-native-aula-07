import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function Movies({ navigation }) {
  function goToMovieDetail() {
    //navigation.replace("MovieDetail"); //iniciar nova rota
    navigation.navigate("MovieDetail");
  }

  return (
    <View>
      <Text>dfgdfgdfg</Text>
      <Button title="Detalhes" onPress={goToMovieDetail} />
    </View>
  );
}

const styles = StyleSheet.create({});
