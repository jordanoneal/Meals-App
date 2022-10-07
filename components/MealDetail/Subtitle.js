import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Subtitle({ children }) {
    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    subTitleContainer: {
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomColor: '#ffffff',
        borderBottomWidth: 2
    },
    subTitle: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})