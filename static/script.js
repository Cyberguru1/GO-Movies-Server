#!/usr/bin/node

$(function () {
    $("#btn").click(function() {
        listMovies();

    });
    function listMovies() {
        var url = 'http://localhost:8000/movies';
        $.get(url, function(data, status){
            for (const items of data) {
                $(".movie-container").append(`<h2>${items.Title}</h2>`);
                console.log("Here")
            }
        })
    }
})