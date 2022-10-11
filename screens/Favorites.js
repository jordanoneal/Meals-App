import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import MealsList from '../components/MealsList'
import { FavoritesContext } from '../store/context/favorites-context'
import { useSelector, useDispatch } from 'react-redux'
import { MEALS } from '../data/dummy-data';

export default function Favorites() {
  // const favorites = useContext(FavoritesContext);
  const favoriteIds = useSelector((state) => state.favoriteMeals.ids)
  const favoriteMeals = MEALS.filter((meal) => favoriteIds.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet</Text>
      </View>
    )
  }

  return (
    <MealsList items={favoriteMeals} />
  )
}

const styles = StyleSheet.create(({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  }
}))