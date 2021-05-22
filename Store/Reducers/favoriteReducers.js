// Store/Reducers/favoriteReducer.js

const initialState = { favoritesFilm: [] };

function toggleFavorite(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      const favoriteFilmIndex = state.favoritesFilm.findIndex(
        (item) => item.id === action.value.id
      );
      if (favoriteFilmIndex !== -1) {
        // Le film est déjà dans les favoris, on le supprime de la liste
        nextState = {
          ...state,
          favoritesFilm: state.favoritesFilm.filter(
            (item, index) => index !== favoriteFilmIndex
          ),
        };
      } else {
        // Le film n'est pas dans les films favoris, on l'ajoute à la liste
        nextState = {
          ...state,
          favoritesFilm: [...state.favoritesFilm, action.value],
        };
      }
      return nextState || state;

    // case "TOGGLE_FILMDETAIL":
    //   const historicFilmsIndex = state.historicFilms.findIndex(
    //     (item) => item.id === action.value.id
    //   );
    //   if (historicFilmsIndex !== -1) {
    //     nextState = {
    //       ...state,
    //       historicFilms: state.historicFilms.filter(
    //         (item) => item.id !== historicFilmsIndex
    //       ),
    //     };
    //   } else {
    //     nextState = {
    //       ...state,
    //       historicFilms: [...state.historicFilms, action.value],
    //     };
    //   }
    //   return nextState || state;
    // case "REMOVE_HISTORIC_FILM":
    //   const id = action.value.id;
    //   nextState = {
    //     ...state,
    //     historicFilms: state.historicFilms.filter((item) => item.id !== id),
    //   };
    //   return nextState || state;
    // case "RESET_HISTORIC":
    //   return {
    //     ...state,
    //     historicFilms: [],
    //   };
    default:
      return state;
  }
}

export default toggleFavorite;
