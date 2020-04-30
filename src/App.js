/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';

const App = () => {
  const addEntry = () => {
    const x = 123;
    alert('Abrir tela para adicionar lançamento');
    console.log(x);
  };

  return (
    <View style={{padding: 10}}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}>
        Saldo atual R$ 2.102,85
      </Text>
      <Button onPress={addEntry} title="adicionar" />

      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}>
        Categorias
      </Text>
      <FlatList
        data={[
          {key: 'Alimentação: R$200'},
          {key: 'Combustivel: R$280'},
          {key: 'Aluguel: R$120'},
          {key: 'Lazer: R$2500'},
          {key: 'Outros: R$1200'},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />

      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}>
        Ultimos lançamentos
      </Text>
      <FlatList
        data={[
          {key: 'Aluguel: R$120'},
          {key: 'Lazer: R$2500'},
          {key: 'Outros: R$1200'},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />
    </View>
  );
};

export default App;
