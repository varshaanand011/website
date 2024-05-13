import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native"
import Chatroom from "./screens/Chatroom";
import Groups from "./screens/Groups";
import Signup from "./screens/Signup";
import { createStackNavigator } 
 from '@react-navigation/stack';
import Login from"./screens/Login";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const Stack = createStackNavigator(); 
const firebaseConfig = {
  apiKey: "AIzaSyCWOLUO__cARTCnsGaTo-dquyMPU-7acHI",
  authDomain: "more-85e79.firebaseapp.com",
  projectId: "more-85e79",
  storageBucket: "more-85e79.appspot.com",
  messagingSenderId: "776359225833",
  appId: "1:776359225833:web:a17bbab6af48bd60574378",
  measurementId: "G-Z9D3PQDXGM",
  databaseURL:"https://more-85e79-default-rtdb.asia-southeast1.firebasedatabase.app",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
export default function App() {
 return (
 <NavigationContainer>
 <Stack.Navigator initialRouteName="Chatroom">
 <Stack.Screen name="Chatroom" component={Chatroom}/>
 <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="Groups"
          component={Groups}
          options={{
            headerShown: false,
          }}
          ></Stack.Screen>
 <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
          ></Stack.Screen>
          </Stack.Navigator>
 </NavigationContainer>


 );
 }
