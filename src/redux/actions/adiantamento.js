import {
  EDITAR_VALOR,
  EDITAR_QTDPARCELAS,
  EDITAR_JUROS
} from "../../util/ActionTypes.js";

export const editarValor = valor => ({
  type: EDITAR_VALOR,
  valor
});
export const editarQtdParcelas = qtdParcelas => ({
  type: EDITAR_QTDPARCELAS,
  qtdParcelas
});
export const editarJuros = juros => ({
  type: EDITAR_JUROS,
  juros
});
