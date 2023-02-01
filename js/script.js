"use strict";
//  const result = confirm("Будеш сьогодні дотку/чи сосати?")

// const answer = prompt("Ти гей?", "Так");
// console.log(answer);

// const answers = [];

// answers[0] = prompt("Як вас звати?", "");
// answers[1] = prompt("Скільки років?", "");
// answers[2] = prompt("Слава Україні", "");

// document.write(answers);
// let number = 7;
// const leftBorderWight = 1;

// number = 10;
// console.log (number);



// const obj = {
//     a:10
// };
// obj.a =50;
// console.log (obj);

// const persone = "Alex";
// let arr = ['plum.png','orange.jpg',6,'apple.bmp', {}, []];
// console.log(arr[3]); 

const numberOfFilms = +prompt('Скільки фільмів ви подивились', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
