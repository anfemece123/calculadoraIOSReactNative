import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import CalculadoraScreen from './src/screens/CalculadoraScreen';
import {Styles} from './src/theme/appTheme';

export default function App() {
  return (
    <SafeAreaView style={Styles.fondo}>
      <StatusBar backgroundColor="black" barStyle={'light-content'} />
      {/* backgraundColor=> para colocarle color a la parte de arriba en android BARSTYLE=> para que se pueda mostrar la parte de arriba en iphone */}
      <CalculadoraScreen />
    </SafeAreaView>
  );
}
