import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../Components/Search";
import FilmDetail from "../Components/FilmDetail";
import Favorites from "../Components/Favorites";
import { Image } from "react-native";

const SearchStack = createStackNavigator();
const FavoriteStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const SearchPage = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Search"
        component={Search}
        options={{ title: "Rechercher" }}
      />
      <SearchStack.Screen
        name="FilmDetail"
        component={FilmDetail}
        options={{ title: "Détail" }}
      />
    </SearchStack.Navigator>
  );
};

const FavoritesPage = () => {
  return (
    <FavoriteStack.Navigator>
      <FavoriteStack.Screen
        name="Favorites"
        component={Favorites}
        options={{ title: "Favorites" }}
      />
      <SearchStack.Screen
        name="FilmDetail"
        component={FilmDetail}
        options={{ title: "Détail" }}
      />
    </FavoriteStack.Navigator>
  );
};

function Tabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Search"
        showLabel={false}
        tabBarOptions={{
          activeTintColor: "white",
          inactiveTintColor: "black",
          activeBackgroundColor: "grey",
          inactiveBackgroundColor: "white",
        }}
      >
        <Tab.Screen
          name="Search"
          component={SearchPage}
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require("../assets/search.png")}
                style={styles.icon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesPage}
          options={{
            tabBarLabel: "Favorite",
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require("../assets/favorite.png")}
                style={styles.icon}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = {
  icon: {
    height: 32,
    width: 32,
  },
};

export default Tabs;
