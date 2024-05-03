import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { theme } from '../../theme';
import { styles } from './styles'

type Props = {
  name: string;
  isComplete: boolean;
  onRemove: () => void;
}
export default function TaskComplete({ name, onRemove, isComplete }: Props) {
  return (
    <View style={styles.container}>
      <AntDesign name="checksquare" size={24} color={theme.purpleDark} />
      <Text style={styles.nameTask}>{name}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Image source={require('../../../assets/lixeira.png')} />
      </TouchableOpacity>
    </View>
  )
}