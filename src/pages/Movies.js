import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import React from "react";
import { movies } from "../../movies";
import MovieCard from "../components/MovieCard";

export default function Movies({ navigation }) {
  function goToMovieDetail(movie) {
    //navigation.replace("MovieDetail"); //iniciar nova rota
    navigation.navigate("MovieDetail", { movieSelected: movie });
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MovieCard movie={item} action={() => goToMovieDetail(item)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },
});
