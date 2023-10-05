#!/usr/bin/node

$(function () {
    $("#btn").click(function() {
        listMovies();

    });
    function listMovies() {
        var url = 'http://localhost:8000/movies';
        $("#list-container").empty();
        $.get(url, function(data, status){
            data.forEach(function(items){
                $("#list-container").append(
                    `<li>Title:  ${items.title} </li>
                    <ul>
                        <li> ID: ${items.id} </li>
                        <li> ISBN: ${items.isbn} </li>
                    </ul>`);
            });
        })
    }
})