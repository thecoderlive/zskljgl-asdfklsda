import React from 'react'
import { Image, View, FlatList, StyleSheet } from 'react-native'



const galleryItem = ({ item }) => (
<View style={styles.gallery_item}>
<Image
    style={styles.art_photo}
    source={{uri: item.art_photo}}
    />
</View>
  );

const Gallery = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.gallery}
    data={item}
    renderItem={galleryItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default Gallery;

const styles = StyleSheet.create({
    'art_photo': {
        'width': '20vw',
        'height': '100vw',
        'marginTop': 5
    }
});