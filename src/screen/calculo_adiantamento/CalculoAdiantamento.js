import React from "react";
import { Animated, StyleSheet, Text, View, ScrollView } from "react-native";
import CalculoAdiantamentoForm from "./CalculoAdiantamentoForm";
import CalculoAdiantamentoResultado from "./CalculoAdiantamentoResultado";
import FadeInView from "./../../components/FadeInView";
import { connect } from "react-redux";
import {
  editarValor,
  editarQtdParcelas
} from "./../../redux/actions/adiantamento.js";
class CalculoAdiantamento extends React.Component {
  constructor() {
    super();
    this.state = {
      fadeAnim: new Animated.Value(0)
    };
  }
  qtdParcelasHandler = qtdParcelas => {
    this.props.onChangeQtdParcelas(qtdParcelas);
  };
  valorHandler = valor => {
    this.props.onChangeValor(valor);
  };
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
            {...this.props.adiantamento}
            changeQtdParcelas={this.qtdParcelasHandler}
            changeValor={this.valorHandler}
          />
          {this.props.adiantamento.valorFinanciado > 0 && (
            <FadeInView>
              <CalculoAdiantamentoResultado {...this.props.adiantamento} />
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

const mapStateToProps = state => {
  return {
    adiantamento: state.adiantamento
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onChangeQtdParcelas: qtdParcelas =>
      dispatch(editarQtdParcelas(qtdParcelas)),
    onChangeValor: valor => dispatch(editarValor(valor))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(
  CalculoAdiantamento
);
