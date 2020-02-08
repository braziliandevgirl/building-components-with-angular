/*
    Utilizamos IIFE (Inmediately invoked function expression) para asegurarnos de que las
    variables locales no escapen al ámbito local
*/
(function() {
    "use strict";

    var module = angular.module("psMovies");
    
    /*
        Una vez que tengo la referencia del módulo, puedo utilizarlo (module API)
        para definir un componente. Hay 2 partes en el componente: el nombre del componente
        (camelCase) y un objeto de definición del componente que va a informar a Angular las diferentes
        caracteristicas del componente. Es un objeto muy similar al objeto de definición de directiva.
    */
    module.component("movieList", {
        template: "Hello from a component!"
    });

}());