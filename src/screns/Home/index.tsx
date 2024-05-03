import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import Header from '../../components/Header';
import { theme } from '../../theme';
import Task from '../../components/Task';
import { styles } from './styles'
import TaskComplete from '../../components/TaskComplete';

export function HomeScreen() {
  const [nameTask, setNameTask] = useState('');
  const [newTask, setNewTask] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  function handleTaskAdd() {
    setNewTask((tasks) => [...tasks, nameTask]);
    setNameTask('');
  }

  function handleTaskRemove(task: string) {
    setNewTask((tasks) => tasks.filter((newTask) => newTask !== task));
    setCompletedTasks((completedTasks) => completedTasks.filter((completedTask) => completedTask !== task));
  }

  function completeTask(task: string) {
    setCompletedTasks((completedTasks) => [...completedTasks, task]);
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.containerInput}>
        <TextInput
          placeholder='Digite uma nova tarefa'
          placeholderTextColor={theme.gray100}
          style={styles.inputArea}
          onChangeText={setNameTask}
          value={nameTask}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={handleTaskAdd}
        >
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.taskCreated}>
        <Text style={styles.create}>Criadas: <Text>{newTask.length}</Text></Text>
        <Text style={styles.finished}>Concluídas: <Text>{completedTasks.length}</Text></Text>
      </View>
      <FlatList
        data={[...newTask]}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Task
            name={item}
            onRemove={() => handleTaskRemove(item)}
            onComplete={() => completeTask(item)} // Alteração aqui
            isComplete={completedTasks.includes(item)} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.containerNewTaskAdd}>
            <Image
              source={require('../../../assets/Clipboard.png')}
              style={styles.imgClipboard}
            />
            <Text style={styles.noTask}>
              Você ainda não tem nenhuma tarefa!!
            </Text>
            <Text style={styles.newTaskText}>
              Por que não cria uma nova?
            </Text>
          </View>
        )}
      />

      <FlatList 
        data={[...completedTasks]}
        keyExtractor={(item) => item}
        renderItem={({item}) => (
          <TaskComplete
            name={item}
            onRemove={() => handleTaskRemove(item)}
            isComplete={completedTasks.includes(item)} 
          />
        )}
      />
    </View>
  );
}

export default HomeScreen;
