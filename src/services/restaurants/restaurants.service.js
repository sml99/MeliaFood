import { mockImages, mocks } from "./mock";
import camelize from "camelize";

export const restaurantRequest = (location = "51.219448,4.402464") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock) {
            reject("not found");
        } else {
            resolve(mock);
        }
    });
};

export const restaurantTransform = ({ results }) => {
    const mappedResults = results.map((restaurant) => {
        restaurant.photos = [
            mockImages[Math.floor(Math.random() * mockImages.length)],
        ];
        console.log(restaurant.photos);
        return {
            ...restaurant,
            address: restaurant.place_id,
            isClosedTemporarily:
                restaurant.business_status === "CLOSED_TEMPORARILY",
            isOpen:
                (restaurant.opening_hours &&
                    restaurant.opening_hours.open_now) ??
                false,
        };
    });
    return camelize(mappedResults);
};
