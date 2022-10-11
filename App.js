import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import Categories from "./screens/Categories";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverview from "./screens/MealsOverview";
import MealDetails from "./screens/MealDetails";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Favorites from "./screens/Favorites";
import { Ionicons } from '@expo/vector-icons';
import FavoritesContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#b64b0c' },
      headerTintColor: "#ffffff",
      sceneContainerStyle: { backgroundColor: '#e3730b' },
      drawerContentStyle: { backgroundColor: '#de590c' },
      drawerInactiveTintColor: '#fff',
      drawerActiveTintColor: '#f4dac2',
      drawerActiveBackgroundColor: '#d67010'
    }}>
      <Drawer.Screen name="Categories" component={Categories}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />
        }} />
      <Drawer.Screen name="Favorites" component={Favorites}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size} />
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#24180f" }}>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#b64b0c' },
            headerTintColor: "#ffffff",
            contentStyle: { backgroundColor: '#e3730b' }
          }}>
            <Stack.Screen name="Drawer" component={DrawerNavigator} options={{
              headerShown: false
            }} />
            <Stack.Screen name="Meals Overview" component={MealsOverview} />
            <Stack.Screen name="Meal Details" component={MealDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#24180f",
  },
});
