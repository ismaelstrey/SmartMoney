import React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';

const EntryListItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ultimos Lançamentos</Text>
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

export default EntryListItem;

const styles = StyleSheet.create({
  container: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
});
