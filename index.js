/* let firsItem = Number(prompt('Введите значение X: '));
let secondItem = Number(prompt('Введите значение Y: '));
let thirdItem = Number(prompt('Введите значение Z: '));
let dItem = Number(prompt('Введите количество: '));

let result = ((firsItem / 1000) * (secondItem / 1000) * (thirdItem / 1000)) * 1.3;
if (dItem != 0) {
    alert(dItem * result);
} else {
    alert(result);
} */

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let firstAnswer = prompt('Один из последних просмотренных фильмов?'),
    secondAnswer = prompt('На сколько оцените его?'),
    firstAnswer1 = prompt('Один из последних просмотренных фильмов?'),
    secondAnswer2 = prompt('На сколько оцените его?');


personalMovieDB.movies[firstAnswer] = secondAnswer;
personalMovieDB.movies[firstAnswer1] = secondAnswer2;

console.log(personalMovieDB);