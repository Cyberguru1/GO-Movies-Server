#!/usr/bin/node

$(function () {
    $("#btn").click(function() {
        listMovies();

    });
    $("#submit-btn").click(function() {
        addMovie();

    });

    function addMovie() {
        var url = 'http://localhost:8000/movies'
        data = {
            Isbn: `${ $("#isbn").val() }`,
            Title: `${ $("#title").val() }`,
            Director: {
                Firstname: `${ $("#director-first-name").val() }`,
                Lastname: `${ $("#director-last-name").val() }`
            }
        }

        $.post(url, JSON.stringify(data), function(response) {
            console.log("sucessful response:", response);
        }, "json")
    }
    function listMovies() {
        var url = 'http://localhost:8000/movies';
        $("#list-container").empty();
        $.get(url, function(data, status){
            data.forEach(function(items){
                $("#list-container").append(
                    `<li>TITLE:  ${items.title} </li>
                    <ul>
                        <li> ID: ${items.id} </li>
                        <li> ISBN: ${items.isbn} </li>
                        <li> Director: ${items.director.firstname} ${items.director.lastname} </li>
                    </ul>
                    <p></p`);
            });
        })
    }
})