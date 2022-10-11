import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => { },
    removeFavorite: (id) => { }
});

export default function FavoritesContextProvider({ children }) {
    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    const addFavorite = (mealId) => {
        setFavoriteMealIds((currentFavoriteIds) => [...currentFavoriteIds, mealId]);
    }

    const removeFavorite = (id) => {
        setFavoriteMealIds((currentFavoriteIds) => currentFavoriteIds.filter((mealId) => mealId !== id));
    }

    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}