import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Pessoas({ navigation }) {
  const [pessoas, setPessoas] = useState(null);
  const [loading, setLoading] = useState(false);
  const URI = "https://randomuser.me/api/?results=20";

  useEffect(() => {
    fetchPessoas();
  }, []);

  async function fetchPessoas() {
    setLoading(true);
    console.log("passou 123");
    const response = await axios.get(URI);
    setPessoas(response.data.results);
    console.log(response.data);
    setLoading(false);
  }

  if (!pessoas) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={"green"} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={pessoas}
        keyExtractor={(item) => item.email}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("DetalhePessoa", { pessoa: item })
              }
              style={styles.containerPessoas}
            >
              <Text>{item.name.first}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 15,
  },
  containerPessoas: {
    width: "100%",
    justifyContent: "center",
    height: 50,
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});
