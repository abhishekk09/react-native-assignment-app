import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

const ProgressTracker: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {id: 1, name: 'Task 1', completed: false},
    {id: 2, name: 'Task 2', completed: false},
    {id: 3, name: 'Task 3', completed: false},
    {id: 4, name: 'Task 4', completed: false},
    {id: 5, name: 'Task 5', completed: false},
    {id: 6, name: 'Task 6', completed: false},
    {id: 7, name: 'Task 7', completed: false},
    {id: 8, name: 'Task 8', completed: false},
    {id: 9, name: 'Task 9', completed: false},
  ]);

  const toggleTaskCompletion = (taskId: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? {...task, completed: !task.completed} : task,
    );
    setTasks(updatedTasks);
  };

  const calculateCompletionPercentage = () => {
    const completedTasks = tasks.filter(task => task.completed).length;
    return ((completedTasks / tasks.length) * 100).toFixed(2) + '%';
  };

  const renderTasks = () => {
    return tasks.map(task => (
      <TouchableOpacity
        key={task.id}
        style={[styles.taskContainer, task.completed && styles.completedTask]}
        onPress={() => toggleTaskCompletion(task.id)}>
        <Text style={styles.taskText}>{task.name}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Progress</Text>
      <Text style={styles.title}>{calculateCompletionPercentage()}</Text>
      {renderTasks()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  taskContainer: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    width: '80%',
    alignItems: 'center',
  },
  taskText: {
    fontSize: 18,
  },
  completedTask: {
    backgroundColor: 'lightblue',
  },
});

export default ProgressTracker;
