import { collection, addDoc, Firestore, setDoc, doc} from "firebase/firestore"; 
import { db } from "../services/firebase"

export function AddingUserToRoom (){
    
    const Rooms = doc(db,'test/OQyXluqZyGwghmU0cydh');

    async function writeUserToRoom(){
        const docData = {
            DisplayName: "John",
            RoomCode: '123456',
            points: 15,
            Email: null,
            ID: 1101
        };
        await setDoc(Rooms, docData);
    }
        writeUserToRoom();
}



/*
what a user needs 
            DisplayName: "John",
            RoomCode: '123456'
            points:
            Email:
            ID:
                try{
        const RoomDoc = await addDoc(collection(db, "rooms"), {
            DisplayName: "John",
            RoomCode: '123456',
            points: 15
        });
        console.log("Document written with ID: ", RoomDoc.id);
    } catch (e){
        console.log("Error adding document", e);
    }

*/ 
