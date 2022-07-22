//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

// create a component
const DetailScreen = props => {
  console.log(props.route.params);
  const data = props.route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>University Details</Text>
      <Text style={styles.title}>Name of university is :{data.name}</Text>
      <Text style={styles.title}>Country is :{data.country}</Text>
      <Text style={styles.title}>Domain is :{data.domains}</Text>
      <Text style={styles.title}>country code is :{data.alpha_two_code}</Text>
      {/* <Text style={styles.title}>url is :{data.web_pages[0]}</Text> */}
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    color: 'orange',
  },
});

//make this component available to the app
export default DetailScreen;
