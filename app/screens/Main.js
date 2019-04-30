import React from "react";
import { View, Text, Button } from "react-native";

const Main = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 48, fontWeight: "900" }}>Hello, World!</Text>
      <Button title="Home" onPress={() => navigation.push("Home")} />
    </View>
  );
};

export default Main;
