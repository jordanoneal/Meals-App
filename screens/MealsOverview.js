import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { MEALS, CATEGORIES } from '../data/dummy-data';
import { useRoute, useNavigation } from '@react-navigation/native'
import MealItem from '../components/MealItem';
import { useLayoutEffect } from 'react';
import MealsList from '../components/MealsList';

export default function MealsOverview() {
    const route = useRoute();
    const categoryId = route.params.categoryId

    const displayedMeals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(categoryId) >= 0;
    });

    const navigation = useNavigation();

    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;

    useLayoutEffect(() => {
        // setOptions inside of the component
        navigation.setOptions({
            title: categoryTitle
        });
    }, [categoryId, navigation])

    return (
        <MealsList items={displayedMeals} />
    )
}

