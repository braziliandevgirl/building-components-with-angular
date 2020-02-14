/*
    Utilizamos IIFE (Inmediately invoked function expression) para asegurarnos de que las
    variables locales no escapen al ámbito local
*/
(function() {
    "use strict";

    var module = angular.module("psMovies");
    
    function fetchMovies($http) {
        return $http.get("/movies.json")
                    .then(function(response) {
                        return response.data;
                    });
    }
    
    function controller($http) {

        var model = this;   
        model.movies = [];

        //Estoy forzando la inicialización de mi modelo en un método distinto y separado de solo construir una
        //instancia del
        model.$onInit = function() {
            fetchMovies($http)
                .then(function(movies) {
                    model.movies = movies;
                });
        };

        model.upRating = function(movie) {
            if(movie.rating < 5){
                movie.rating += 1;
            }
        };

        model.downRating = function(movie) {
            if(movie.rating > 1){
                movie.rating -= 1;
            }
        };
    }    
    
    module.component("movieList", {
        templateUrl: "/ps-movies/movie-list.component.html",
        /*Agrego un atributo para definir el alias del controller */
        controllerAs: "model",
        controller: ["$http", controller]
    });

}());