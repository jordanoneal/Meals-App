import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { MEALS } from '../data/dummy-data';
import MealDetailsCard from '../components/MealDetailsCard';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import { FavoritesContext } from '../store/context/favorites-context';
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, removeFavorite } from '../store/redux/favorites';

export default function MealDetails() {
    const route = useRoute();
    const navigation = useNavigation();

    // const favoritesContext = useContext(FavoritesContext);

    const dispatch = useDispatch();
    const favoriteIds = useSelector((state) => state.favoriteMeals.ids)

    const selectedMealId = route.params.mealId;
    const selectedMeal = MEALS.find((el) => el.id === selectedMealId)

    // const isFavorite = favoritesContext.ids.includes(selectedMealId);
    const isFavorite = favoriteIds.includes(selectedMealId);

    const changeFavoritesHandler = () => {
        if (isFavorite) {
            // favoritesContext.removeFavorite(selectedMealId);
            dispatch(removeFavorite({ id: selectedMealId }));
        }
        else {
            // favoritesContext.addFavorite(selectedMealId);
            dispatch(addFavorite({ id: selectedMealId }));
        }
    }

    useLayoutEffect(() => {
        const mealTitle = selectedMeal.title
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={isFavorite ? 'star' : 'star-outline'} color='#ffffff' onPress={changeFavoritesHandler} />
            },
            title: mealTitle
        })
    }, [navigation, changeFavoritesHandler])

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