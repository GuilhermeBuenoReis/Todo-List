import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { styles } from './styles'
import { theme } from '../../theme';

type Props = {
  name: string;
  onRemove: () => void;
  isComplete: boolean;
  onComplete: () => void;
}

export default function Task({ name, onRemove, isComplete, onComplete }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onComplete}>
        <AntDesign name={isComplete ? "checkcircle" : "checkcircleo"} size={24} color={theme.blue} />
      </TouchableOpacity>
      <Text style={[styles.nameTask, isComplete && styles.completedTask]}>{name}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Image source={require('../../../assets/lixeira.png')} />
      </TouchableOpacity>
    </View>
  );
}