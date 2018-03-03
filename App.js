import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Slider } from "react-native-elements";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: 0,
      qtdParcelas: 1,
      juros: 200,
      valorParcela: 0,
      valorFinanciado: 0,
      totalJuros: 0
    };
  }
  calcularAdiantamento() {
    let juros = this.state.juros * 0.0001;
    let valorFinanciado =
      this.state.valor * (1 + juros * this.state.qtdParcelas);
    let valorParcela =
      valorFinanciado /
      (this.state.qtdParcelas > 0 ? this.state.qtdParcelas : 1);
    let totalJuros = valorFinanciado - this.state.valor;
    this.setState({ valorFinanciado });
    this.setState({ valorParcela });
    this.setState({ totalJuros });
  }
  exibeResultado() {
    this.setState({ exibeResultados: true });
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>
              CÁLCULO DE ADIANTAMENTO DE RECURSOS
            </Text>
          </View>

          <View style={styles.formulario}>
            <Text style={styles.formularioText}>
              Valor do Adiantamento: R${(this.state.valor / 100)
                .toFixed(2)
                .toString()
                .replace(".", ",")}
            </Text>
            <Slider
              value={this.state.valor}
              onValueChange={valor => {
                this.setState({ valor });
                this.calcularAdiantamento();
              }}
              minimumValue={0}
              maximumValue={500000}
              step={5000}
              thumbStyle={styles.sliderThumb}
              trackStyle={styles.sliderTrack}
              minimumTrackTintColor={"#29abe2"}
              thumbTouchSize={{ width: 70, height: 70 }}
              style={styles.sliderStyle}
            />
            <Text style={styles.formularioText}>
              Parcelas:{this.state.qtdParcelas} vezes
            </Text>
            <Slider
              value={this.state.qtdParcelas}
              onValueChange={qtdParcelas => {
                this.setState({ qtdParcelas });
                this.calcularAdiantamento();
              }}
              minimumValue={1}
              maximumValue={60}
              step={1}
              thumbStyle={styles.sliderThumb}
              trackStyle={styles.sliderTrack}
              minimumTrackTintColor={"#29abe2"}
              thumbTouchSize={{ width: 60, height: 60 }}
              style={styles.sliderStyle}
            />
            <Text style={styles.formularioText}>
              Juros Utilizado:{" "}
              {(this.state.juros / 100)
                .toFixed(2)
                .toString()
                .replace(".", ",")}%
            </Text>
          </View>

          <View style={styles.resultado}>
            <Text style={styles.resultadoText}>
              Total Financiado: R$
              {(this.state.valorFinanciado / 100)
                .toFixed(2)
                .toString()
                .replace(".", ",")}
            </Text>
            <Text style={styles.resultadoText}>
              {this.state.qtdParcelas} vezes de R$
              {(this.state.valorParcela / 100)
                .toFixed(2)
                .toString()
                .replace(".", ",")}
            </Text>
            <Text style={styles.resultadoText}>
              Total de Juros: R$
              {(this.state.totalJuros / 100)
                .toFixed(2)
                .toString()
                .replace(".", ",")}
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  header: {
    padding: 14
  },
  headerText: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#29abe2"
  },
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
  },
  resultado: {
    marginTop: 30,
    backgroundColor: "#29abe2",
    width: "100%",
    borderColor: "#0071bc",
    borderStyle: "solid",
    borderWidth: 2,
    paddingTop: 20
  },
  resultadoText: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 20
  }
});
