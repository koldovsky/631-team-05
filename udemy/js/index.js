
const numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", " ");

const personalMovieDB = {
    count: result,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Последний фильм?", " "),
b = +prompt("Оцените его", " "),
 c = prompt("Последний фильм?", " "),
 d = +prompt("Оцените его", " ");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);