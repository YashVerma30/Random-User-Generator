$(document).ready(function(){

    var radioGender = "Male";
    var selectedNationality = "AU";

    var url= "https://randomuser.me/api/?results=10&gender=male&nat="+selectedNationality;
    var p= "";
    var loadMore;

    fetchinformation(url); 

$("input[type='radio]").click(function(){

 $("#results").empty();

  url= "https://randomuser.me/api/?results=10&gender=male&nat="+selectedNationality;
if(radioGender){

    fetchinformation(url);
}
});


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

                <span> (${person.nat})</span>

                <span style="margin-left:420px;">Email: ${person.email}</span>


                </div>
                
                `;

                $("#results").append(p);

                });

                loadMore= `<button id="loadmore" class="btn btn-primary">Load more</button>`;

                $("#results").append(loadMore);
        });
     }
});