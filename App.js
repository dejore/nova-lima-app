import React from "react";
import { View } from "react-native";
import CalculoAdiantamento from "./components/CalculoAdiantamento";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <CalculoAdiantamento />
      </View>
    );
  }
}
