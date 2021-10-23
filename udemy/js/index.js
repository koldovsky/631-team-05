
var numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", " ");

var personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

var a = prompt("Последний фильм?", " "),
b = +prompt("Оцените его", " "),
 c = prompt("Последний фильм?", " "),
 d = +prompt("Оцените его", " ");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);