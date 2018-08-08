
$(document).ready(function() {
var animals = ["dog", "cat", "rabbit", "hamster","skunk","goldfish","bird","ferret","turtle","goat","cow","pig"];


var globalanimalgif = new Array();
var globalanimaljpg = new Array();
var globalanimalstatus = new Array();
var globalanimmalrating = new Array();
var globaldisplaypic = new Array();
var gifstatus = false;

function alertAnimalName() {
    $( "#giphypic" ).empty();
    gifstatus = false;
    for (j=0; j<globalanimalstatus.length; j++){
        globalanimalstatus[j]=false;
    }
    console.log("global animalstatus refresh after reload queary by click animal button" + globalanimalstatus);

    var animalkey=$(this).attr('data-name').trim();
    console.log(animalkey);
    //alert("the animal for search is " + animalkey);
    getGiffyimage(animalkey);
    
  }


function animalbutton(){

    $( "#animallist" ).empty();
    gifstatus = false;
    for (j=0; j<globalanimalstatus.length; j++){
        globalanimalstatus[j]=false;
    }
    //console.log("globalanimalstatus refresh" + globalanimalstatus);

    for (i=0; i<animals.length; i++){
        var animalbutton; 
        var animalname;
        animalbutton = $("<button>");
        animalbutton.attr("data-name",animals[i]);
        animalbutton.text(animals[i]);
        animalbutton.addClass("animal");
        $("#animallist").append(animalbutton);
        $("#animallist").append("    ");
        $("button").addClass("btn btn-info");


    }
}


$("#animalsubmit").click(function(){
    event.preventDefault();
    var newanimal;
   newanimal = $("input").val(); 
   if(newanimal !=""){
        animals.push(newanimal);
        console.log(animals);
   }
   animalbutton();
});

$(document).on("click", ".animal", alertAnimalName);
animalbutton();


$(document).on("click", ".animalpic", changegifstatus);

function changegifstatus(){
    $( "#giphypic" ).empty();
    var gifkey = $(this).attr('data-name');
    console.log("gifkey is " + gifkey);
    globalanimalstatus[gifkey]=!globalanimalstatus[gifkey];

    console.log(gifstatus);
    console.log(globalanimalstatus);

    for (i=0; i<globalanimalgif.length; i++){
        if (globalanimalstatus[i]) {
            console.log("redisplay");
            var animalpicDIV= $("<div class ='animalpicbox'>");
            var p = $("<p>").text("Rating: " + globalanimmalrating[i]);
            var img = $("<img class ='animalpic'>");
            img.attr('src', globalanimalgif[i]);
            //console.log(globalanimalgif[i]);
            img.attr("data-name",i);
            $("#giphypic").append(animalpicDIV);
            animalpicDIV.append(p);
            animalpicDIV.append(img);
        }

        else{
            var animalpicDIV= $("<div class ='animalpicbox'>");
            var p = $("<p>").text("Rating: " + globalanimmalrating[i]);
            var img = $("<img class ='animalpic'>");
            img.attr('src', globalanimaljpg[i]);
            //console.log(globalanimaljpg[i]);
            img.attr("data-name",i);
            $("#giphypic").append(animalpicDIV);
            animalpicDIV.append(p);
            animalpicDIV.append(img);

        }
    }


}


function getGiffyimage(searchkey){
    var queryURL = "http://api.giphy.com/v1/gifs/search?q="+searchkey+"&api_key=dc6zaTOxFJmzC";
    console.log(queryURL);
    $( "#giphypic" ).empty();
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        var animalgiffyarray = new Array;
        animalgiffyarray = response.data;

        for (i=0; i<animalgiffyarray.length; i++){
            var animalpicDIV= $("<div class ='animalpicbox'>");
            var p = $("<p>").text("Rating: "+ animalgiffyarray[i].rating);
            //console.log(p);
            var img = $("<img class ='animalpic'>");
            img.attr('src', animalgiffyarray[i].images.fixed_height_still.url);
            img.attr("data-name",i);
            $("#giphypic").append(animalpicDIV);
            animalpicDIV.append(p);
            animalpicDIV.append(img);
            globalanimalgif[i]=animalgiffyarray[i].images.fixed_height_downsampled.url;
            globalanimaljpg[i]=animalgiffyarray[i].images.fixed_height_still.url;
            globalanimmalrating[i]=animalgiffyarray[i].rating;
            globalanimalstatus[i] = false;
            globaldisplaypic[i]=globalanimaljpg[i];
            console.log("globalanimalstatus after click the pic: "+ globalanimalstatus);
            //$("#giphypic").append(img);
            //console.log("display giffy now");
        }
        
        //return animalgiffyarray;
        //return globalanimaljpg; 
      });

      //var returnedgiffyarray = getGiffyimage("dog");

      //console.log("globalanimalgif length:"+globalanimalgif.length);
      //console.log("globalanimalgif:"+globalanimalgif);
      //console.log("globalanimaljpg length:"+globalanimaljpg.length);
      //console.log("globalanimaljpg:"+globalanimaljpg);
      //console.log("globalanimalrating length:"+globalanimmalrating.length);
      //console.log("globalanimalrating:"+globalanimmalrating);
      //console.log("globalanimaldisplaypic:"+globaldisplaypic);
      //console.log("globalanimalstatus: "+ globalanimalstatus);

}

/*
function dispGiffyimage(imagearray){
        var animalpicDIV= $("<div class ='animalpicarray'>");
        var p = $("<p>").text("Rating: "+ imagearray.rating);
        var img = $("<img>");
        img.attr('src', 'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg');
        $("#giphypic").append(animalpicDIV);
        animalpicDIV.append(p1);
        animalpicDIV.append(img);
        console.log("display giffy now");

}*/




//dispGiffyimage("dog");



});

