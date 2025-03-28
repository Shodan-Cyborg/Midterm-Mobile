import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native-web";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import ShopScreen from "../screens/ShopScreen";
import CartScreen from "../screens/CartScreen";
import ContactScreen from "../screens/ContactScreen";
import AboutScreen from "../screens/AboutScreen";
import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitle: () => (
          <Image
            source={require("../assets/images/logo.png")}
            style={{ width: 120, height: 30,  }}
          />
        ),
        headerTitleAlign: "center",
        headerStyle: {
          height: 60,
          backgroundColor: "#fff" 
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") iconName = "home-outline";
          else if (route.name === "Shop") iconName = "cart-outline";
          else if (route.name === "Cart") iconName = "basket-outline";
          else if (route.name === "Contact") iconName = "call-outline";
          else if (route.name === "About") iconName = "information-circle-outline";
          else if (route.name === "Logout") iconName = "log-out-outline";
          else if (route.name === "Profile") iconName = "person-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle:  {
          display: route.name === "Logout" ? "none" : "flex",
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "#fff", height: 60, paddingBottom: 10 },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Logout" component={LoginScreen} />
    </Tab.Navigator>
  );
};

export default NavBar;