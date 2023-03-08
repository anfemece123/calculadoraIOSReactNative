import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Styles} from '../theme/appTheme';

interface Props {
  texto: string;
  color?: string;
  ancho?: boolean;
  accion: (numeroTexto: string) => void;
}

const BottonCalc = ({
  texto,
  color = '#2D2D2D',
  ancho = false,
  accion,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      <View
        style={{
          ...Styles.boton,
          backgroundColor: color,
          width: ancho ? 180 : 80,
        }}>
        <Text
          style={{
            ...Styles.botonText,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {' '}
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BottonCalc;

const styles = StyleSheet.create({});
