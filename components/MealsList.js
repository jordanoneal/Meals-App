import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import MealItem from './MealItem'

export default function MealsList({ items }) {
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
            <FlatList data={items} keyExtractor={item => item.id}
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