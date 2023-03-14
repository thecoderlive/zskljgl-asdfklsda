import React from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import Gallery from './Gallery'

const Product = () => (
<ScrollView style={styles.product} showsVerticalScrollIndicator={false}>
<Gallery item={item.gallery}/>
<Text style={styles.event_name}>{item.event_name}</Text>
<Text style={styles.event_description}>{item.event_description}</Text>
</ScrollView>
)

export default Product;

const styles = StyleSheet.create({
    'event_name': {
        'color': 'hsl(274,100%,60%)',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'event_description': {
        'fontSize': 12,
        'fontWeight': '250',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});