import React from "react";
import { StyleSheet, Text } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

export const RestaurantInfo = ({ restaurant = {} }) => {
    const {
        name = "E1even",
        icon,
        photos = [
            "https://images.pexels.com/photos/6443989/pexels-photo-6443989.jpeg",
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4.3,
        isClosedTemporarily = false,
    } = restaurant;

    return (
        <Card elevation={5} style={styles.card}>
            <Card.Cover
                key={name}
                style={styles.cover}
                source={{ uri: photos[0] }}
            />
            <Text style={styles.title}>{name}</Text>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
    },
    cover: {
        padding: 12,
        backgroundColor: "white",
    },
    title: {
        padding: 12,
    },
});
