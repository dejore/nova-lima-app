import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  state = {
    valor: 0,
    qtdParcelas: 1,
    juros: 200,
    valorParcela: 0,
    valorFinanciado: 0,
    totalJuros: 0
  };

  render() {
    return (
      <View style={styles.container}>
        <Text{this.state.valor}</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
