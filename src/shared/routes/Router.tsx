import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStackNaviagation from "./app-stack-navigtion";

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStackNaviagation />
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({});
