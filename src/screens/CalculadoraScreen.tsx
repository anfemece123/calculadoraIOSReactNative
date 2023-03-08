import {StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {Styles} from '../theme/appTheme';
import BottonCalc from '../components/BottonCalc';
import {useCalculadora} from '../hooks/useCalculadora';

const CalculadoraScreen = () => {
  const {
    numeroAnterior,
    numero,
    limpiar,
    positivoNegativo,
    btnDelete,
    btnDividir,
    armarNumero,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  } = useCalculadora();
  return (
    <View style={Styles.claculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={Styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}
      <Text style={Styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      {/* fila de botones */}
      <View style={Styles.fila}>
        <BottonCalc texto="C" color="#9B9B9B" accion={limpiar} />
        <BottonCalc texto="+/-" color="#9B9B9B" accion={positivoNegativo} />
        <BottonCalc texto="del" color="#9B9B9B" accion={btnDelete} />
        <BottonCalc texto="/" color="#FF9427" accion={btnDividir} />
      </View>
      {/* fila de botones */}
      <View style={Styles.fila}>
        <BottonCalc texto="7" accion={armarNumero} />
        <BottonCalc texto="8" accion={armarNumero} />
        <BottonCalc texto="9" accion={armarNumero} />
        <BottonCalc texto="X" color="#FF9427" accion={btnMultiplicar} />
      </View>
      {/* fila de botones */}
      <View style={Styles.fila}>
        <BottonCalc texto="4" accion={armarNumero} />
        <BottonCalc texto="5" accion={armarNumero} />
        <BottonCalc texto="6" accion={armarNumero} />
        <BottonCalc texto="-" color="#FF9427" accion={btnRestar} />
      </View>
      {/* fila de botones */}
      <View style={Styles.fila}>
        <BottonCalc texto="1" accion={armarNumero} />
        <BottonCalc texto="2" accion={armarNumero} />
        <BottonCalc texto="3" accion={armarNumero} />
        <BottonCalc texto="+" color="#FF9427" accion={btnSumar} />
      </View>
      {/* fila de botones */}
      <View style={Styles.fila}>
        {/* <BottonCalc texto="C" /> */}
        <BottonCalc texto="0" ancho accion={armarNumero} />
        <BottonCalc texto="." accion={armarNumero} />
        <BottonCalc texto="=" color="#FF9427" accion={calcular} />
      </View>
    </View>
  );
};

export default CalculadoraScreen;
