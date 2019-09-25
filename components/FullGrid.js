import React from 'react';
import { StyleSheet, Text, View, Flatlist, Dimensions } from 'react-native';

const data = [
  // user's data here
]

const formatData = (data, numCols) => {
  const numOfFullRows = Math.floow(data.length / numCols);
  let numOfElsLastRow = data.length - (numOfFullRows * numCols);
  while(numOfElsLastRow !== numCols && numOfElsLastRow !== 0) {
    data.push( {key: `blank-${numOfElsLastRow}`, empty: true});

  }
  return data
};

const numCols = 52;

export default class FullGrid extends React.Component {
  renderItem = ({ item, index }) => {
    if(item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View
        style={styles.item}
      >
        <Text style={styles.itemText}>{item.key}</Text>
      </View>
    );
  };

  render() {
    return(
      <Flatlist
        data={formatData(data, numCols)}
        style={styles.container}
        renderItem={this.renderItem}
        numColumns={numCols}
      />
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex:1 ,
    marginVertical: 20,
  },
  item: {
    backgroundColor: '#4D243D',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / numCols,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
});
