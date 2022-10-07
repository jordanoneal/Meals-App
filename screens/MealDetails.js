import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { MEALS } from '../data/dummy-data';
import MealDetailsCard from '../components/MealDetailsCard';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';

export default function MealDetails() {
    const route = useRoute();
    const mealId = route.params.mealId;

    const navigation = useNavigation();

    const selectedMeal = MEALS.find((el) => el.id === mealId)

    const headerButtonPressHandler = () => {
        console.log('Pressed');
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon='star' color='#ffffff' onPress={headerButtonPressHandler} />
            }
        })
    }, [navigation, headerButtonPressHandler])

    return (
        <ScrollView style={{ marginBottom: 32 }}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }}></Image>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetailsCard complexity={selectedMeal.complexity} duration={selectedMeal.duration} affordability={selectedMeal.affordability} textStyle={styles.detailText} />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients:</Subtitle>
                    <List data={selectedMeal.ingredients}></List>
                    <Subtitle>Steps:</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 8,
        textAlign: 'center',
        color: '#ffffff'
    },
    listContainer: {
        width: '80%'
    },
    listOuterContainer: {
        alignItems: 'center'
    }
})