import { addDoc, collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from '../../core/firestore';

export const fetchNotifications = async () => {
    try {
        // Query Firestore for notifications associated with the current user's ID
        const querySnapshot = await getDocs(collection(db, 'notifications'));
        const notifications = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(), // Access data within the document
        }));
        console.log('Notifications:', notifications);
        return notifications; // Return the fetched notifications array
    } catch (error) {
        console.error('Error fetching notifications:', error);
        return []; // Return an empty array in case of error
    }
};

export const deleteNotification = async (taskId) => {
    try {
        const notiDocRef = doc(db, 'notifications', taskId);
        await deleteDoc(notiDocRef);
        console.log('Notification deleted successfully!');
    } catch (error) {
        console.error('Error deleting notification: ', error);
    }
};



export const addNotification = async (recipients, message) => {
    try {
        // Loop through each recipient and add a notification for each one
        recipients.forEach(async (recipient) => {
            // Add a new document to the "notifications" collection for each recipient
            const notificationData = {
                recipient: recipient,
                message: message,
                timestamp: new Date().toISOString(),
            };
            await addDoc(collection(db, 'notifications'), notificationData);
            console.log(`Notification added successfully for recipient: ${recipient}`);
        });
    } catch (error) {
        console.error('Error adding notification:', error);
    }
};