import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAkRrIhQWDPTA7drQQRI3EJK8mYZHEkrBA",
  authDomain: "my-portfolio-8ec21.firebaseapp.com",
  projectId: "my-portfolio-8ec21",
  storageBucket: "my-portfolio-8ec21.appspot.com",
  messagingSenderId: "579034990914",
  appId: "1:579034990914:web:cc8ce4012b50a7b35ea0db",
  measurementId: "G-LVDBMD9CV2"
};


// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.heading.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done')
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'portfolio');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    const portfolioMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { heading, data } = docSnapshot.data();
        acc[heading.toLowerCase()] = data;
        return acc;
    }, {});
    return portfolioMap;
}

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt
            });
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }

    return userDocRef

    //check if user data exists
}
