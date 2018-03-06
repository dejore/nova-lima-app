import React from "react";
import { Animated, StyleSheet, Text, View, ScrollView } from "react-native";
import CalculoAdiantamentoForm from "./CalculoAdiantamentoForm";
import CalculoAdiantamentoResultado from "./CalculoAdiantamentoResultado";
import FadeInView from "./FadeInView";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: 0,
      qtdParcelas: 2,
      juros: 200,
      valorParcela: 0,
      valorFinanciado: 0,
      totalJuros: 0,
      fadeAnim: new Animated.Value(0)
    };
  }
  onChangeQtdParcelas = qtdParcelas => {
    this.setState({ qtdParcelas });
    this.calcularAdiantamento();
  };
  onChangeValor = valor => {
    this.setState({ valor });
    this.calcularAdiantamento();
  };
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

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>
              CÁLCULO DE ADIANTAMENTO DE RECURSOS
            </Text>
          </View>
          <CalculoAdiantamentoForm
            onChangeQtdParcelas={this.onChangeQtdParcelas}
            onChangeValor={this.onChangeValor}
            valor={this.state.valor}
            qtdParcelas={this.state.qtdParcelas}
            juros={this.state.juros}
          />
          {this.state.valorFinanciado > 0 && (
            <FadeInView>
              <CalculoAdiantamentoResultado
                qtdParcelas={this.state.qtdParcelas}
                valorParcela={this.state.valorParcela}
                valorFinanciado={this.state.valorFinanciado}
                totalJuros={this.state.totalJuros}
              />
            </FadeInView>
          )}
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
  }
});
