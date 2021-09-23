import camelize from "camelize";

import { locations } from "./location.mock";

export const locationRequest = (searchTerm = "antwerp") => {
    return new Promise((resolve, reject) => {
        const locationMock = locations[searchTerm];
        if (locationMock?.length < 1) {
            reject("not found");
        } else {
            resolve(locationMock);
        }
    });
};

export const locationTransform = (result) => {
    if (!result.results[0]) {
        console.log("location Service: invalid results!! : ");
        return;
    }

    const formattedResponse = camelize(result);
    const { geometry = {} } = formattedResponse.results[0];
    const { lat = "", lng = "" } = geometry.location;

    return { lat, lng, viewport: geometry.viewport };
};
