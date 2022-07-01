import { LOCALSTORAGEMOVIES } from "../constants";

export const saveMovieLS = (data) => {
    localStorage.setItem(LOCALSTORAGEMOVIES, JSON.stringify(data));
}

export const getMovieLS = () => {
    const data = localStorage.getItem(LOCALSTORAGEMOVIES);
    return JSON.parse(data);
}