//import liraries
import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView, Image} from 'react-native';

function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/images/splash.png')}
        style={{height: 900, width: 400}}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
