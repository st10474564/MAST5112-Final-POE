import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import  AppNavigator  from './src/navigation/AppNavigator';
import { Dish } from './src/types/types';
import { storage } from './src/utils/storage';

const App: React.FC = () => {
  const [dishes, setDishes] = useState<Dish[]>([]);

  // Load dishes on app start
  useEffect(() => {
    loadDishes();
  }, []);

  const loadDishes = async (): Promise<void> => {
    const loadedDishes = await storage.loadDishes();
    setDishes(loadedDishes);
  };

  const handleDishUpdate = (updatedDishes: Dish[]): void => {
    setDishes(updatedDishes);
  };

  return (
    <View style={styles.container}>
      <AppNavigator dishes={dishes} onDishUpdate={handleDishUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;