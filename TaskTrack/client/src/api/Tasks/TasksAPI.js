import { addDoc, collection, getDocs, deleteDoc, doc,updateDoc } from "firebase/firestore";
import { db } from '../../core/firestore';

export const saveTask = async (task) => {
    try {
        // Add a new document with a generated ID to the "tasks" collection
        const docRef = await addDoc(collection(db, 'tasks'), task);
        console.log('Task added successfully!');
        console.log('Document reference:', docRef);
    } catch (error) {
        console.error('Error adding task: ', error);
    }
};

export const getTasks = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'tasks'));
        const tasks = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        console.log('Tasks:', tasks);
        return tasks;
    } catch (error) {
        console.error('Error fetching tasks: ', error);
        return [];
    }
};

export const deleteTask = async (taskId) => {
    try {
        const taskDocRef = doc(db, 'tasks', taskId);
        await deleteDoc(taskDocRef);
        console.log('Task deleted successfully!');
    } catch (error) {
        console.error('Error deleting task: ', error);
    }
};

export const toggleTask = async (taskId, completed) => {
    try {
        const taskDocRef = doc(db, 'tasks', taskId);
        await updateDoc(taskDocRef, {
            completed: !completed // Toggle the completion status
        });
        console.log('Task completion status updated successfully!');
    } catch (error) {
        console.error('Error updating task completion status: ', error);
    }
};