import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import Categories from "./screens/Categories";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverview from "./screens/MealsOverview";
import MealDetails from "./screens/MealDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#24180f" }}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Meals Categories" screenOptions={{
          headerStyle: { backgroundColor: '#b64b0c' },
          headerTintColor: "#ffffff",
          contentStyle: { backgroundColor: '#e3730b' }
        }}>
          <Stack.Screen
            name="Meals Categories"
            component={Categories}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen name="Meals Overview" component={MealsOverview} />
          <Stack.Screen name="Meal Details" component={MealDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#24180f",
  },
});
