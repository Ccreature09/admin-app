import { Text, View } from '../../components/Themed';
import { doc, setDoc, deleteDoc} from "firebase/firestore"; 
import { db } from '../firebase/firebase'
import { Button } from 'react-native';
// Add a new document in collection "cities"





export default function TabOneScreen() {
  
  async function addButton() {
    try {
      // Add a new document to the "cities" collection
      await setDoc(doc(db, "users", "LA"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA"
      });
      console.log("Document successfully written!");
    } catch (error) {
      console.error("Error writing document: ", error);
      <Text>error</Text>
    }
  }


  return (
    <View className='flex-1 items-center content-center'>
      <Text className='text-7xl mt-32 font-bold'>Home</Text>     
      <Button
        title="Press button"
        onPress={() => {addButton}} //change "function" with your function for the button pressing
/>
    </View>
  );
}