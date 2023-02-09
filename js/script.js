"use strict";
// //  const result = confirm("Будеш сьогодні дотку/чи сосати?")

// // const answer = prompt("Ти гей?", "Так");
// // console.log(answer);

// // const answers = [];

// // answers[0] = prompt("Як вас звати?", "");
// // answers[1] = prompt("Скільки років?", "");
// // answers[2] = prompt("Слава Україні", "");

// // document.write(answers);
// // let number = 7;
// // const leftBorderWight = 1;

// // number = 10;
// // console.log (number);

// // const obj = {
// //     a:10
// // };
// // obj.a =50;
// // console.log (obj);

// // const persone = "Alex";
// // let arr = ['plum.png','orange.jpg',6,'apple.bmp', {}, []];
// // console.log(arr[3]);

// // TASK 1

// const numberOfFilms = +prompt("Скільки фільмів ви подивились", "");

// const personalMovieDB = {
//  count: numberOfFilms,
//  movies: {},
//  actors: {},
//  genres: [],
//  privat: false,
// };

// // const a = prompt("Один из последних просмотренных фильмов?", ""),
// //  b = prompt("На сколько оцените его?", ""),
// //  c = prompt("Один из последних просмотренных фильмов?", ""),
// //  d = prompt("На сколько оцените его?", "");

// // personalMovieDB.movies[a] = b;
// // personalMovieDB.movies[c] = d;

// // TASK 2

// for (let i = 0; i < 2; i++) {
//  const a = prompt("Один из последних просмотренных фильмов?", ""),
//   b = prompt("На сколько оцените его?", "");

//  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//   personalMovieDB.movies[a] = b;
//   console.log("done");
//  } else {
//   console.log("error");
//   i--;
//  }
// }

// if (personalMovieDB.count < 10) {
//  console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
//  console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//  console.log("Вы киноман");
// } else {
//  console.log("Произошла ошибка");
// }
// console.log(personalMovieDB);

//Task 3
let numberOfFilms;

function start() {
 numberOfFilms = +prompt("Скільки фільмів ви подивились", "");

 while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
  numberOfFilms = +prompt("Скільки фільмів ви подивились", "");
 }
}
// start();

const personalMovieDB = {
 count: numberOfFilms,
 movies: {},
 actors: {},
 genres: [],
 privat: false,
};

function rememer() {
 for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фильмов?", ""),
   b = prompt("На сколько оцените его?", "");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
   personalMovieDB.movies[a] = b;
   console.log("done");
  } else {
   console.log("error");
   i--;
  }
 }
}
// rememer();

function deteckedPersonalLevel() {
 if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
 } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
 } else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман");
 } else {
  console.log("Произошла ошибка");
 }
 console.log(personalMovieDB);
}
// deteckedPersonalLevel();

function showMyDB(hidden) {
 if (!hidden) {
  console.log(personalMovieDB);
 }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
 for (let i = 1; i <= 3; i++) {
  const genre = prompt(`Ваш любимый жанр под номером ${i}`);
  personalMovieDB.genres[i - 1] = genre;
 }
}
writeYourGenres();

// // if (num < 49) {
// //   console.log("Error");
// // } else if (num > 100) {
// //   console.log("Duzo");
// // } else {
// //   console.log("okey");
// // }

// // const num = 50;

// // switch (num) {
// //   case 49:
// //     console.log("false");
// //     break;
// //   case 50:
// //     console.log("true");
// //     break;
// //   default:
// //     console.log("not now");
// //     break;
// // }

// // const hamburger = true;
// // const fries = true;

// // if (hamburger && fries) {
// //   console.log("Я Ситий!");
// // }

// //Цикли

// // for (let i = 0; i < 3; i++) {
// //  console.log(i);
// //  for (let j = 0; j < 3; j++) {
// //   console.log(j);
// //  }
// // }

// // let result = "";
// // const lenght = 7;

// // for (let i = 1; i < lenght; i++) {
// //  for (let j = 0; j < i; j++) {
// //   result += "*";
// //  }

// //  result += "\n";
// // }
// // console.log(result);

// // first: for (let i = 0; i < 3; i++) {
// //  console.log(`First level: ${i}`);
// //  for (let j = 0; j < 3; j++) {
// //   console.log(`secondary level: ${j}`);
// //  }
// //  for (let k = 0; k < 3; k++) {
// //   if (k === 2) break first;
// //   console.log(`third level: ${k}`);
// //  }
// // }

// const num = function () {
//  console.log("Helo");
// };
// num();

// const calc = (a, b) => {
//  console.log(calc);
//  return a + b;
// };

// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount, curr) {
//  console.log(curr * amount);
// }

// convert(100, usdCurr);
// convert(100, eurCurr);

// const usdCurr = 28;
// const eurCurr = 32;
// const discount = 0.5;

// function convert(amount, curr) {
//  return curr * amount;
// }

// function promotion(result) {
//  console.log(result * discount);
// }

// promotion(convert(100, usdCurr));
// promotion(convert(100, eurCurr));

// function cykl() {
//  for (let i = 0; i < 5; i++) {
//   console.log(i);
//   if (i === 4);
//  }
//  console.log("Done");
// }
// cykl();

// function nazwa() {
//  for (let j = 0; j < 20; j++) {
//   console.log(j);
//   if (j === 10) return;
//  }
//  console.log("Done");
// }
// nazwa();

//MEDODY

// const fruit = "Hellow world";
// console.log(fruit.slice(0, 4));

// const logg = "Luzhetskyi";
// console.log(logg.indexOf("e"));
