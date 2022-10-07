import { View, Text, StyleSheet, Pressable, Image, Platform } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import MealDetailsCard from './MealDetailsCard';

export default function MealItem({ title, imageUrl, duration, complexity, affordability, id }) {
    const nagivation = useNavigation();

    const pressHandler = () => {
        nagivation.navigate('Meal Details', {
            mealId: id
        });
    }
    const mealProps = { duration, complexity, affordability }

    return (
        <View style={styles.mealItem}>
            <Pressable style={({ pressed }) => pressed ? styles.buttonPressed : null} android_ripple={{ color: '#ccc' }} onPress={pressHandler}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image style={styles.image} source={{ uri: imageUrl }}></Image>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetailsCard {...mealProps} />
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: '#faf0f0',
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    buttonPressed: {
        opacity: 0.5
    },
})