import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Slider } from "react-native-elements";

const calcularAdiantamentoForm = props => {
  return (
    <View style={styles.formulario}>
      <Text style={styles.formularioText}>
        Valor do Adiantamento: R${(props.valor / 100)
          .toFixed(2)
          .toString()
          .replace(".", ",")}
      </Text>
      <Slider
        value={props.valor}
        onValueChange={valor => props.onChangeValor(valor)}
        minimumValue={0}
        maximumValue={500000}
        step={5000}
        thumbStyle={styles.sliderThumb}
        trackStyle={styles.sliderTrack}
        minimumTrackTintColor={"#29abe2"}
        thumbTouchSize={{ width: 500, height: 200 }}
        style={styles.sliderStyle}
      />
      <Text style={styles.formularioText}>
        Parcelas: {props.qtdParcelas} vezes
      </Text>
      <Slider
        value={props.qtdParcelas}
        onValueChange={qtdParcelas => props.onChangeQtdParcelas(qtdParcelas)}
        minimumValue={1}
        maximumValue={60}
        step={1}
        thumbStyle={styles.sliderThumb}
        trackStyle={styles.sliderTrack}
        minimumTrackTintColor={"#29abe2"}
        thumbTouchSize={{ width: 500, height: 200 }}
        style={styles.sliderStyle}
      />
      <Text style={styles.formularioText}>
        Juros Utilizado:{" "}
        {(props.juros / 100)
          .toFixed(2)
          .toString()
          .replace(".", ",")}%
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  formulario: {},
  formularioText: {
    color: "#575656",
    fontSize: 22
  },
  sliderStyle: {
    marginTop: 15,
    marginBottom: 15
  },
  sliderThumb: {
    backgroundColor: "#0071bc",
    width: 20,
    height: 20
  },
  sliderTrack: {
    height: 7
  }
});

export default calcularAdiantamentoForm;
