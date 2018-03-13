import {
  EDITAR_VALOR,
  EDITAR_QTDPARCELAS,
  EDITAR_JUROS
} from "../../util/ActionTypes.js";
const defaultAdiantamentoState = {
  valor: 1000,
  qtdParcelas: 2,
  juros: 800,
  valorParcela: 0,
  valorFinanciado: 0,
  totalJuros: 0
};
const adiantamentoReducer = (state = defaultAdiantamentoState, action) => {
  switch (action.type) {
    case EDITAR_VALOR:
      return {
        ...state,
        ...calcularAdiantamento(action.valor, state.juros, state.qtdParcelas),
        valor: action.valor
      };
    case EDITAR_QTDPARCELAS:
      return {
        ...state,
        ...calcularAdiantamento(state.valor, state.juros, action.qtdParcelas),
        qtdParcelas: action.qtdParcelas
      };
    case EDITAR_JUROS:
      return {
        ...state,
        ...calcularAdiantamento(state.valor, action.juros, state.qtdParcelas),
        juros: action.juros
      };
    default:
      return {
        ...state,
        ...calcularAdiantamento(state.valor, state.juros, state.qtdParcelas)
      };
  }
};

let valorFinanciado = 0,
  valorParcela = 0,
  totalJuros = 0;

const calcularAdiantamento = (valor, juros, qtdParcelas) => {
  juros = juros * 0.0001;
  let valorFinanciado = valor * (1 + juros * qtdParcelas);
  let valorParcela = valorFinanciado / (qtdParcelas > 0 ? qtdParcelas : 1);
  let totalJuros = valorFinanciado - valor;
  return {
    valorFinanciado: valorFinanciado, //Math.round(valorFinanciado),
    valorParcela: valorParcela,
    totalJuros: totalJuros
  };
};

export default adiantamentoReducer;
