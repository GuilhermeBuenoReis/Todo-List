import { View, Text, Image } from 'react-native';
import React from 'react';
import { styles } from './styles';

export default function Header() {
  return (
    <>
    <View style = {styles.containerHeader}> 
      <View style = {styles.container}>
          <Image 
            source={require('../../../assets/rocket.png')}
          />
          <View style={styles.containerText}>
            <Text style={styles.text1}>To</Text>
            <Text style= {styles.text2}>Do</Text>
          </View>
        </View>
      </View>
    </>
  );
};