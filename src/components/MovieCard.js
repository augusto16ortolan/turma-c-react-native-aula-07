import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function MovieCard({ movie, action }) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => action()}>
      <View style={styles.containerInfo}>
        <Image height={140} width={100} source={{ uri: movie.poster }} />
        <Text>{movie.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 150,
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
  },
  containerInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
