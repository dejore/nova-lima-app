import React from "react";
import { View } from "react-native";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import CalculoAdiantamento from "./src/screen/calculo_adiantamento/CalculoAdiantamento";
import configureStore from "./src/redux/store/configureStore";

const store = configureStore();
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <CalculoAdiantamento />
      </Provider>
    );
  }
}
