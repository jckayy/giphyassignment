
$(document).ready(function() {
var animals = ["dog", "cat", "rabbit", "hamster","skunk","goldfish","bird","ferret","turtle","goat","cow","pig"];
var animalbutton;
var animalname;

for (i=0; i<animals.length; i++){

    //var animalbutton; 
    //var animalname;
   animalbutton = document.createElement("button"); 
   animalname = document.createTextNode(animals[i]);
   animalbutton.value=animals[i]; //is this correct to set the value of the button?
   animalbutton.id=animals[i];
   animalbutton.appendChild(animalname);
   $("#animallist").append(animalbutton);
   $("#animallist").append("    ");
   $("button").addClass("btn btn-info");
   }



$("#animalsubmit").click(function(){
    var newanimal;
    newanimal = document.getElementById("animalname").value;
    if(newanimal !=""){
        animals.push(newanimal);
        console.log(animals);
        //var animalbutton; 
        //var animalname;
        animalbutton = document.createElement("button"); 
        animalname = document.createTextNode(newanimal);
        animalbutton.value=newanimal; //is this correct to set the value of the button?
        animalbutton.id=newanimal;
        console.log(animalbutton.id);
        animalbutton.appendChild(animalname);
        $("#animallist").append(animalbutton);
        $("#animallist").append("    ");
        $("button").addClass("btn btn-info");
    }
})


$("button").click(function(){

    alert("button clicked " + this.id);
    //var buttonvalue = document.getElementById("#dog").value;//https://www.w3schools.com/jsref/prop_button_value.asp
    //alert(this.id);
    var animalSearchKey = this.id;
    if(animalSearchKey!="animalsubmit"){
        console.log(animalSearchKey);
    //add ajax logic here;


    }
    /*
    else{
        var newanimal;
        newanimal = document.getElementById("animalname").value;
        if(newanimal !=""){
        animals.push(newanimal);
        console.log(animals);
        //var animalbutton; 
        //var animalname;
        animalbutton = document.createElement("button"); 
        animalname = document.createTextNode(newanimal);
        animalbutton.value=newanimal; //is this correct to set the value of the button?
        animalbutton.id=newanimal;
        console.log(animalbutton.id + 'animalbutton.id test');
        animalbutton.appendChild(animalname);
        $("#animallist").append(animalbutton);
        $("#animallist").append("    ");
        $("button").addClass("btn btn-info");
        }
    }*/
})



var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
/**var giffyImageArray;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      return reponse;
      giffyImageArray = response.data;
      return giffyImageArray;
      console.log("giffy array in is: " + giffyImageArray);
    });



    console.log("giffy array is: " + giffyImageArray);

**/



function getGiffyimage(imagearray){


   

}


getGiffyimage();


});

