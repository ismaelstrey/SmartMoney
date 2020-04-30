import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

const EntrySummaryList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>
      <FlatList
        style={styles.title}
        data={[
          {key: 'Alimentação: R$200'},
          {key: 'Combustivel: R$280'},
          {key: 'Aluguel: R$120'},
          {key: 'Lazer: R$2500'},
          {key: 'Outros: R$1200'},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />
    </View>
  );
};

export default EntrySummaryList;

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});
