import firebase from 'firebase'

export const appName = 'react-adv'
export const firebaseConfig = {
    apiKey: "AIzaSyBQ369NGhilY9VIqcAUwdQERYhh9yqvvGs",
    authDomain: `${appName}-69b2d.firebaseapp.com`,
    databaseURL: `https://${appName}-69b2d.firebaseio.com`,
    projectId: `${appName}-69b2d`,
    storageBucket: `${appName}-69b2d.appspot.com`,
    messagingSenderId: "579598284776"
};

firebase.initializeApp(firebaseConfig)