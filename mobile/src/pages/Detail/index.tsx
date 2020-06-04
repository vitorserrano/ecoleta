import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import { Feather, FontAwesome } from '@expo/vector-icons';
import styles from './styles';

const Detail = () => {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Feather name="arrow-left" color="#34CB79" size={24} />
        </TouchableOpacity>

        <Image
          style={styles.pointImage}
          source={{
            uri:
              'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
          }}
        />
        <Text style={styles.pointName}>Mercado do seu Zé</Text>
        <Text style={styles.pointItems}>
          Baterias, Lâmpadas, Óleo de cozinha
        </Text>

        <View style={styles.address}>
          <Text style={styles.addressTitle}>Endereço:</Text>
          <Text style={styles.addressContent}>Cianorte, PR</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={() => {}}>
          <FontAwesome name="whatsapp" size={20} color="#fff" />
          <Text style={styles.buttonText}>Whatsapp</Text>
        </RectButton>

        <RectButton style={styles.button} onPress={() => {}}>
          <Feather name="mail" size={20} color="#fff" />
          <Text style={styles.buttonText}>E-mail</Text>
        </RectButton>
      </View>
    </SafeAreaView>
  );
};

export default Detail;
