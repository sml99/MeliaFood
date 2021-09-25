import firebase from "firebase/app";

export const loginRequest = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
};
