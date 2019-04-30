import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from "../screens/Main";
import Home from "../screens/Home";
import { View } from "react-native";
import { Text } from "react-native";

const stackNavigator = createStackNavigator({
  Main,
  Home
});

export default createAppContainer(stackNavigator);
