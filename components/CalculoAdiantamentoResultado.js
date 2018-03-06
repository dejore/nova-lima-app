import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Slider } from "react-native-elements";

const calcularAdiantamentoResultado = props => {
  return (
    <View style={styles.resultadoContainer}>
      <Text style={styles.resultadoText}>
        Total Financiado: R$
        {(props.valorFinanciado / 100)
          .toFixed(2)
          .toString()
          .replace(".", ",")}
      </Text>
      <Text style={styles.resultadoText}>
        {props.qtdParcelas} vezes de R$
        {(props.valorParcela / 100)
          .toFixed(2)
          .toString()
          .replace(".", ",")}
      </Text>
      <Text style={styles.resultadoText}>
        Total de Juros: R$
        {(props.totalJuros / 100)
          .toFixed(2)
          .toString()
          .replace(".", ",")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  resultado: {
    marginTop: 30,
    backgroundColor: "#29abe2",
    width: "100%",
    borderColor: "#0071bc",
    borderStyle: "solid",
    borderWidth: 2,
    paddingTop: 16
  },
  resultadoText: {
    color: "#29abe2",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "left",
    paddingBottom: 16
  },
  resultadoContainer: {
    paddingTop: 30
  }
});

export default calcularAdiantamentoResultado;
