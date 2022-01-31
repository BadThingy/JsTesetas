/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */


function Movie(title, director, buget) {
    this.title = title;
    this.director = director;
    this.buget = buget;
    this.wasExpensive = function(){
       if(buget >=  100000000 ) {
           return true;
       }else {
           return false;
       }
    };
    }

let movie = new Movie("piratai", "nzn", 10000000)

console.log(movie)
