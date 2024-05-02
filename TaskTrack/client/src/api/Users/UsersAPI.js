import { getDocs, collection } from "firebase/firestore";
import { db } from '../../core/firestore';

export const getUsers = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const usernames = querySnapshot.docs.map(doc => doc.data().username);
        return usernames;
    } catch (error) {
        console.error('Error fetching users: ', error);
        return [];
    }
};
