$(document).ready(function(){


    var url= "https://randomuser.me/api/?results=10&gender=male&nat=AU";
    var p= "";

    fetchinformation(url); 

     function fetchinformation(url){
        fetch(url)
        .then((response) => (response.json()))
        .then(function(data){
    
            data.results.forEach(person => {

                p= `<div class= "well">

                <img src="${person.picture.medium}" class="rounded" >

                <span>${person.name.title} </span>

                <span> ${person.name.first}</span>

                <span> ${person.name.last}</span>


                </div>
                
                `;

                $("#results").append(p);

                });
        });
     }
});