import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ErrorBoundary from "react-native-error-boundary";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Router from "./src/shared/routes/Router";
import { PaperProvider } from "react-native-paper";

const App = () => {
  return (
    /**
      ErrorBoundary avoid white screen issue when an error occurs
      it need to be parent of all compoents
     */
    <ErrorBoundary>
      <PaperProvider>
        <SafeAreaProvider>
          <Router />
        </SafeAreaProvider>
      </PaperProvider>
    </ErrorBoundary>
  );
};

export default App;

const styles = StyleSheet.create({});
