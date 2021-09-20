import styled from "styled-components/native";

const sizeVariant = {
    small: 1,
    medium: 2,
    large: 3,
};

const directionVariant = {
    top: "margin-top",
    left: "margin-left",
    right: "margin-right",
    bottom: "margin-bottom",
};

const getVariant = (direction, size, theme) => {
    const sizeIndex = sizeVariant[size];
    const property = directionVariant[direction];
    const value = theme.space[sizeIndex];

    return `${property}:${value}`;
};
export const Spacer = styled.View`
    ${({ direction, size, theme }) => getVariant(direction, size, theme)}
`;

Spacer.defaultProps = {
    //FOR SOME FING REASON POSITION TRIGGER A BUG
    direction: "left",
    size: "large",
};
