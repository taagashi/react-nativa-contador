import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ContadorSimples() {
  const [contador, setContador] = useState(0);
  const [mensagem, setMensagem] = useState('');

  function aumentar() {
    setContador(contador + 1);
    setMensagem('Contador aumentado')
  }

  function diminuir() {
    setContador(contador - 1);
    setMensagem('Contador diminuido')
  }

  function resetar() {
    setContador(0);
    setMensagem('Contador foi resetado')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador App</Text>

      <View style={styles.borda}>
        <Text style={styles.contador}>{contador}</Text>
      </View>

      <Text style={styles.subtitulo}>{mensagem}</Text>

      <View style={styles.botoes}>
        <TouchableOpacity style={[styles.botao, styles.botaoMenos]} onPress={diminuir}>
          <Text style={styles.textoBotao}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, styles.botaoReset]} onPress={resetar}>
          <Text style={styles.textoBotao}>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, styles.botaoMais]} onPress={aumentar}>
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f7f7',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contador: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitulo: {
    marginVertical: 10,
    color: '#666',
  },
  borda: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: 150,
    borderRadius: 75,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    width: '80%',
  },
  botao: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  botaoMenos: {
    backgroundColor: '#f44336',
  },
  botaoReset: {
    backgroundColor: '#00bcd4',
  },
  botaoMais: {
    backgroundColor: '#4caf50',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rodape: {
    position: 'absolute',
    bottom: 20,
    fontSize: 12,
    color: '#999',
  },
});
