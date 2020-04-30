import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

const EntrySummaryList = ({entries}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>
      <FlatList
        style={styles.title}
        data={entries}
        renderItem={({item}) => (
          <Text>
            - {item.description} -${item.amount}
          </Text>
        )}
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
