import React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';

const EntryListItem = ({entries}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ultimos Lançamentos</Text>
      <FlatList
        data={entries}
        renderItem={({item}) => (
          <Text>
            - {item.description} - $ {item.amount}
          </Text>
        )}
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
