import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { MEALS, CATEGORIES } from '../data/dummy-data';
import { useRoute, useNavigation } from '@react-navigation/native'
import MealItem from '../components/MealItem';
import { useLayoutEffect } from 'react';

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

    const renderMealItem = (itemData) => {
        const mealItemProps = {
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            duration: itemData.item.duration,
            complexity: itemData.item.complexity,
            affordability: itemData.item.affordability
        }

        return <MealItem {...mealItemProps}></MealItem>
    }

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={item => item.id}
                renderItem={renderMealItem}
            ></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})