import React from "react";
import { StyleSheet, Text, View } from "react-native";
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
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>CÁLCULO DE ADIANTAMENTO DE RECURSOS</Text>
        </View>
        <View style={styles.formulario}>
          <Text>
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
            step={100}
            thumbStyle={styles.sliderThumb}
          />
          <Text>Parcelas:{this.state.qtdParcelas} vezes</Text>
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
          />
          <Text>
            Juros Utilizado:{(this.state.juros / 100)
              .toFixed(2)
              .toString()
              .replace(".", ",")}%
          </Text>
        </View>
        <View style={styles.resultado}>
          <Text>
            Total Financiado: R$
            {(this.state.valorFinanciado / 100)
              .toFixed(2)
              .toString()
              .replace(".", ",")}
          </Text>
          <Text>
            {this.state.qtdParcelas} vezes de R$
            {(this.state.valorParcela / 100)
              .toFixed(2)
              .toString()
              .replace(".", ",")}
          </Text>
          <Text>
            Total de Juros: R$
            {(this.state.totalJuros / 100)
              .toFixed(2)
              .toString()
              .replace(".", ",")}
          </Text>
        </View>
      </View>
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
    width: "100%"
  },
  formulario: {
    width: "100%",
    padding: 25
  },
  resultado: {
    padding: 25
  },
  sliderThumb: {
    backgroundColor: "#29abe2"
  }
});
