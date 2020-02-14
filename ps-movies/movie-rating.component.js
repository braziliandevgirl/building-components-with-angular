(function () {
    "use strict";

    var module = angular.module("psMovies");

    module.component("movieRating", {
        templateUrl: "/ps-movies/movie-rating.component.html",
        //Estoy diciendo a Angular que vincule estas propriedades al mundo exterior
        bindings: {
            /* < es un input*/
            value: "<"
        },
        controllerAs: "model",
        controller: function() {

            var model = this;

            model.$onInit = function() {
                model.entries = new Array(model.value);
            };

            model.$onChanges = function() {
                model.entries = new Array(model.value);
            };

            

        }     
    });

})();