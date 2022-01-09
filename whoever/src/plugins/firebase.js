import { createApp } from 'vue';
import App from '../App';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-storage';
import 'firebase/auth';
const firebaseConfig = {
	apiKey: 'AIzaSyB1aSUvhrtpuI2LTSt-9A0W9vAo5PSOhI0',
	authDomain: 'kkotgalpi-4fec2.firebaseapp.com',
	databaseURL:
		'https://kkotgalpi-4fec2-default-rtdb.asia-southeast1.firebasedatabase.app',
	projectId: 'kkotgalpi-4fec2',
	storageBucket: 'kkotgalpi-4fec2.appspot.com',
	messagingSenderId: '436364413505',
	appId: '1:436364413505:web:259902bdc9eb32778654c0',
	measurementId: 'G-VK1YJH8PMR',
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const storage = firebase.storage();
export const storageRef = storage.ref();
export const auth = firebase.auth();
const app = createApp(App);
app.config.globalProperties.firebase = firebase;
