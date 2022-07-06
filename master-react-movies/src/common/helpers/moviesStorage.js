import { LOCALSTORAGEMOVIES } from "../constants";

export const saveMovieLS = (data) => {
    localStorage.setItem(LOCALSTORAGEMOVIES, JSON.stringify(data));
}

export const getMovieLS = () => {
    const data = localStorage.getItem(LOCALSTORAGEMOVIES);
    return JSON.parse(data);
}

export const deleteMovieLS = (item) => {
    const data = localStorage.getItem(LOCALSTORAGEMOVIES);
    let list = JSON.parse(data);
    if ( list.length ) {
        list = list.filter(i => i.id !== parseInt(item.id));
    }
    saveMovieLS(list);
    return list;
}