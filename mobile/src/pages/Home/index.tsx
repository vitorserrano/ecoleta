import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} />
    </View>
  );
};

export default Home;
