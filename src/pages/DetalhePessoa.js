import { StyleSheet, Text, View, Image } from "react-native";
import React, { useLayoutEffect, useEffect } from "react";

export default function DetalhePessoa({ navigation, route }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: pessoa.name.first,
    });
  }, []);

  const { pessoa } = route.params;
  return (
    <View style={styles.container}>
      <Image height={200} width={200} source={{ uri: pessoa.picture.large }} />
      <Text>{pessoa.name.first}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});
