import React from 'react';
import { View, Text, Button } from 'react-native';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DailyProgressScreen = () => {
  const navigation = useNavigation();

  const handleMarkCompleted = () => {
    // Implement logic to mark habit as completed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Daily Progress Screen</Text>
      <Button title="Mark Habit as Completed" onPress={handleMarkCompleted} />
      <Button title="Go to Monthly Progress" onPress={() => navigation.navigate('MonthlyProgress')} />
    </View>
  );
};


const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
};



export default DailyProgressScreen;
