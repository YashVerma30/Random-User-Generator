$(document).ready(function(){


    var url= "https://randomuser.me/api/";

    fetch(url)
    .then((response) => (response.json()))
    .then(function(data){

        console.log(data);

    });
});