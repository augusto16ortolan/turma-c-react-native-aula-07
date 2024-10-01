import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetchPokemon();
  }, []);

  async function fetchPokemon() {
    console.log("teste");
    const t = await axios.get("https://pokeapi.co/api/v2/pokemon");
    console.log(t);
    console.log("teste1");
  }

  if (!pokemon) {
    return <ActivityIndicator size={"large"} />;
  }

  return (
    <View>
      <Text>Pokemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
